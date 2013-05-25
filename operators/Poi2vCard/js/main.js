/*
 *     (C) Copyright 2012-2013 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 *     This file is part of the poi2vcard widget.
 *
 *     poi2vcard is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published
 *     by the Free Software Foundation, either version 3 of the License, or (at
 *     your option) any later version.
 *
 *     poi2vcard is distributed in the hope that it will be useful, but
 *     WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero
 *     General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with poi2vcard. If not, see <http://www.gnu.org/licenses/>.
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

/*global window, document, console, MashupPlatform */

MashupPlatform.wiring.registerCallback("poiInput", function(poiString) {
    var poi = new Poi(JSON.parse(poiString).poi);
    // Extract vCard from poi:
    var vCardString = poi.getData();
    var vCard = new Vcard();

    if (typeof vCardString === 'string' && vCard.parser(vCardString) !== {}) {
        // Send vCard:
        MashupPlatform.wiring.pushEvent("vCardOutput", vCardString);
    }
});
