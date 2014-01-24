/*
 *     Copyright (c) 2013 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 *     This file is part of the lamp-post-status widget.
 *
 *     lamp-post-status is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published
 *     by the Free Software Foundation, either version 3 of the License, or (at
 *     your option) any later version.
 *
 *     lamp-post-status is distributed in the hope that it will be useful, but
 *     WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero
 *     General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with lamp-post-status. If not, see <http://www.gnu.org/licenses/>.
 *
 *     Linking this library statically or dynamically with other modules is
 *     making a combined work based on this library.  Thus, the terms and
 *     conditions of the GNU Affero General Public License cover the whole
 *     combination.
 *
 *     As a special exception, the copyright holders of this library give you
 *     permission to link this library with independent modules to produce an
 *     executable, regardless of the license terms of these independent
 *     modules, and to copy and distribute the resulting executable under
 *     terms of your choice, provided that you also meet, for each linked
 *     independent module, the terms and conditions of the license of that
 *     module.  An independent module is a module which is not derived from
 *     or based on this library.  If you modify this library, you may extend
 *     this exception to your version of the library, but you are not
 *     obligated to do so.  If you do not wish to do so, delete this
 *     exception statement from your version.
 *
 */

/*global MashupPlatform, NGSI, StyledElements*/

(function () {

    "use strict";

    var ZPA_SERVICE_URL = 'http://130.206.81.70:8080/zpa/SetTarget';
    // current ids
    // 30DE860000200006
    // 30DE8600002000C5
    var zpaId = '30DE860000200006';
    var powerStatus = 'OFF';

    var create_ngsi_connection = function create_ngsi_connection() {
        this.ngsi = new NGSI.Connection(MashupPlatform.prefs.get('ngsi_server'));
    };

    var EntiTyStatus = function EntiTyStatus() {

        /* Wiring */
        MashupPlatform.wiring.registerCallback('entity', this.onEntiTy.bind(this));

        /* Preferences */
        create_ngsi_connection.call(this);
        MashupPlatform.prefs.registerCallback(create_ngsi_connection.bind(this));

        /* Context */
        MashupPlatform.widget.context.registerCallback(this.onWidgetContextChange.bind(this));

        /* Atributes */
        this.tabs = {};
        this.mainTab = {};
        this.commandsTab = {};
        this.entiTy = null;
        this.infoContainer = {};
        this.graphcoNtainer = null;
        this.extraInfoCommandsContainer = {};
        this.powerButton = null;
    };
 
    EntiTyStatus.prototype.init = function init() {
        this.tabs = new StyledElements.StyledNotebook();
        this.tabs.insertInto(document.body);
        this.mainTab = this.tabs.createTab({name: "Main Info", closable: false});
        this.commandsTab = this.tabs.createTab({name: "Bar Graph", closable: false});

        this.infoContainer = this.createContainer("div", "entiTysContainer");
        this.graphcoNtainer = this.createContainer("div", "graphcoNtainer");
        this.extraInfoCommandsContainer = this.createContainer("div", "extraInfoContainer");
        
        this.mainTab.appendChild(this.infoContainer);
        this.commandsTab.appendChild(this.extraInfoCommandsContainer);
        this.commandsTab.appendChild(this.graphcoNtainer);

        this.clearEntiTyInformation();
    };

    EntiTyStatus.prototype.createContainer = function createContainer(containerType, idName) {
        var container = document.createElement(containerType);
        container.setAttribute("id", idName);
        return container;
    };

    EntiTyStatus.prototype.createInfoItem = function createInfoItem(parentNode, fieldName, displayTitle, fieldValue) {
        var title, field;

        title = document.getElementById(fieldName + "Title");
        if (!title) {
            title = this.createContainer("div", fieldName + "Title");
            field = this.createContainer("div", fieldName);
        } else {
            field = document.getElementById(fieldName);
        }
        title.textContent = displayTitle;
        field.textContent = fieldValue;

        title.setAttribute("class", "entiTyInfoTitle");
        field.setAttribute("class", "entiTyInfo");

        parentNode.appendChild(title);
        title.appendChild(field);
    };
    
    

    EntiTyStatus.prototype.onEntiTy = function onEntiTy(entiTyString) {
        this.entiTy = JSON.parse(entiTyString);
        if (this.entiTy.type === 'Node') {
            this.fillEntiTyInformation(this.entiTy);
        } else {
            this.entiTy = null;
            this.clearEntiTyInformation();
        }
    };

    EntiTyStatus.prototype.onWidgetContextChange = function onWidgetContextChange(new_values) {
        if ('heightInPixels' in new_values) {
            this.tabs.repaint();
        }
    };

    

    

    EntiTyStatus.prototype.closeIssue = function closeIssue(issue, wrapper, button) {
        button.disable();

        this.ngsi.updateAttributes([{
            entity: {
                id: issue.id,
                type: 'Issue'
            },
            attributes: [{
                name: 'closingDate',
                type: 'string',
                contextValue: (new Date()).toISOString()
            }]
        }], {
            onSuccess: function () {
                wrapper.parentNode.removeChild(wrapper);
            },
            onFailure: function () {
                // show error
                button.enable();
            }
        });
    };

    EntiTyStatus.prototype.clearEntiTyInformation = function clearEntiTyInformation() {

        this.graphcoNtainer.textContent = '';
        this.powerButton = null;

        this.createInfoItem.call(this, this.infoContainer, "entiTyId", "ID", '-------');
        this.createInfoItem.call(this, this.infoContainer, "entiTyLocation", "Location", '-------');
        this.createInfoItem.call(this, this.infoContainer, "entiTyFilling", "Filling Level", '-------');
        this.createInfoItem.call(this, this.infoContainer, "entiTyBatteryCharge", "Battery Charge", '-------');
        this.createInfoItem.call(this, this.extraInfoCommandsContainer, "entiTyCommands", "ID", '-------');
    };

    EntiTyStatus.prototype.fillEntiTyInformation = function fillEntiTyInformation() {
        var issue_id, button;

        this.graphcoNtainer.textContent = '';

        this.createInfoItem.call(this, this.infoContainer, "entiTyId", "ID", this.entiTy.id);
        this.createInfoItem.call(this, this.infoContainer, "entiTyLocation", "Location", this.entiTy.Longitud + ', ' + this.entiTy.Latitud);
        this.createInfoItem.call(this, this.infoContainer, "entiTyFilling", "Filling Level", this.entiTy.filling +'%');
        this.createInfoItem.call(this, this.infoContainer, "entiTyBatteryCharge", "Battery Charge", this.entiTy.batteryCharge + '%');
        this.createInfoItem.call(this, this.extraInfoCommandsContainer, "entiTyCommands", "ID", this.entiTy.id);

    };

    var entiTyStatus = new EntiTyStatus();

    window.addEventListener("DOMContentLoaded", entiTyStatus.init.bind(entiTyStatus), false);

})();
