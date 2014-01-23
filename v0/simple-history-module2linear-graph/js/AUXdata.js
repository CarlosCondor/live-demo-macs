/*
 *     Copyright (c) 2013 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 *     This file is part of the simple-history-module2-linear-graph operator.
 *
 *     simple-history-module2-linear-graph is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published
 *     by the Free Software Foundation, either version 3 of the License, or (at
 *     your option) any later version.
 *
 *     simple-history-module2-linear-graph is distributed in the hope that it will be useful, but
 *     WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero
 *     General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with simple-history-module2-linear-graph. If not, see <http://www.gnu.org/licenses/>.
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
function exampleNODEdata(sensorId) {
    data = [];
    now = new Date().getTime();
    samples = 1500;
    for(var i=0; i<samples; i++){
        data.push({
            'id': i,
            'nodeId': sensorId,
            'filling': Math.abs(Math.sin(i/100)*100),
            'batteryCharge': 90-i/200,
            'timeInstant': now - (samples-i)*10*60*1000
        });
    }
    return data;
}

var exampleAMMSdata = [
    {
        "id": 67,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367800200000
    },
    {
        "id": 72,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367802000000
    },
    {
        "id": 73,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367802900000
    },
    {
        "id": 68,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367804700000
    },
    {
        "id": 69,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367805600000
    },
    {
        "id": 77,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367806500000
    },
    {
        "id": 71,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367807400000
    },
    {
        "id": 78,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367808300000
    },
    {
        "id": 70,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367810100000
    },
    {
        "id": 79,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367811000000
    },
    {
        "id": 75,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367811900000
    },
    {
        "id": 80,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367813700000
    },
    {
        "id": 74,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367815500000
    },
    {
        "id": 81,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367818200000
    },
    {
        "id": 82,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367819100000
    },
    {
        "id": 83,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367820000000
    },
    {
        "id": 76,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367820900000
    },
    {
        "id": 86,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367821800000
    },
    {
        "id": 84,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367822700000
    },
    {
        "id": 85,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367823600000
    },
    {
        "id": 87,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367824500000
    },
    {
        "id": 88,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367825400000
    },
    {
        "id": 89,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367826300000
    },
    {
        "id": 90,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367827200000
    },
    {
        "id": 91,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367828100000
    },
    {
        "id": 92,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367829000000
    },
    {
        "id": 93,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367829900000
    },
    {
        "id": 94,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367830800000
    },
    {
        "id": 95,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367831700000
    },
    {
        "id": 96,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367832600000
    },
    {
        "id": 101,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367833500000
    },
    {
        "id": 100,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367834400000
    },
    {
        "id": 98,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367835300000
    },
    {
        "id": 97,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367837100000
    },
    {
        "id": 99,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367838000000
    },
    {
        "id": 107,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367838900000
    },
    {
        "id": 103,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367839800000
    },
    {
        "id": 105,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367841600000
    },
    {
        "id": 111,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367842500000
    },
    {
        "id": 102,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367843400000
    },
    {
        "id": 104,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367846100000
    },
    {
        "id": 106,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367847000000
    },
    {
        "id": 108,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367847900000
    },
    {
        "id": 109,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367848800000
    },
    {
        "id": 110,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367849700000
    },
    {
        "id": 113,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367850600000
    },
    {
        "id": 116,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367851500000
    },
    {
        "id": 117,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367853300000
    },
    {
        "id": 112,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367854200000
    },
    {
        "id": 114,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367855100000
    },
    {
        "id": 115,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367856000000
    },
    {
        "id": 124,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367856900000
    },
    {
        "id": 120,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367857800000
    },
    {
        "id": 119,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367858700000
    },
    {
        "id": 121,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367859600000
    },
    {
        "id": 122,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367860500000
    },
    {
        "id": 125,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367861400000
    },
    {
        "id": 118,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367862300000
    },
    {
        "id": 127,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367863200000
    },
    {
        "id": 123,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367864100000
    },
    {
        "id": 126,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367865000000
    },
    {
        "id": 128,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367865900000
    },
    {
        "id": 129,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367866800000
    },
    {
        "id": 130,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367867700000
    },
    {
        "id": 131,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367868600000
    },
    {
        "id": 132,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367869500000
    },
    {
        "id": 133,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367871300000
    },
    {
        "id": 134,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367874900000
    },
    {
        "id": 136,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367875800000
    },
    {
        "id": 135,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367879400000
    },
    {
        "id": 141,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367880300000
    },
    {
        "id": 140,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367883000000
    },
    {
        "id": 143,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367883900000
    },
    {
        "id": 139,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367886600000
    },
    {
        "id": 145,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367887500000
    },
    {
        "id": 146,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367888400000
    },
    {
        "id": 142,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367889300000
    },
    {
        "id": 147,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367890200000
    },
    {
        "id": 137,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367891100000
    },
    {
        "id": 138,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367892000000
    },
    {
        "id": 144,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367894700000
    },
    {
        "id": 151,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367896500000
    },
    {
        "id": 148,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367899200000
    },
    {
        "id": 155,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367900100000
    },
    {
        "id": 152,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367901000000
    },
    {
        "id": 160,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367901900000
    },
    {
        "id": 150,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367902800000
    },
    {
        "id": 149,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367903700000
    },
    {
        "id": 154,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367905500000
    },
    {
        "id": 156,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367906400000
    },
    {
        "id": 157,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367907300000
    },
    {
        "id": 158,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367908200000
    },
    {
        "id": 159,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367910000000
    },
    {
        "id": 162,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367912700000
    },
    {
        "id": 161,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367913600000
    },
    {
        "id": 153,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367914500000
    },
    {
        "id": 163,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367915400000
    },
    {
        "id": 164,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367916300000
    },
    {
        "id": 165,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367917200000
    },
    {
        "id": 191,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367918100000
    },
    {
        "id": 166,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367919000000
    },
    {
        "id": 168,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367919900000
    },
    {
        "id": 169,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367920800000
    },
    {
        "id": 167,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367921700000
    },
    {
        "id": 170,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367922600000
    },
    {
        "id": 171,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367923500000
    },
    {
        "id": 174,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367924400000
    },
    {
        "id": 178,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367925300000
    },
    {
        "id": 173,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367927100000
    },
    {
        "id": 172,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367928000000
    },
    {
        "id": 187,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367928900000
    },
    {
        "id": 175,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367929800000
    },
    {
        "id": 188,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367930700000
    },
    {
        "id": 176,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367931600000
    },
    {
        "id": 177,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367932500000
    },
    {
        "id": 190,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367933400000
    },
    {
        "id": 179,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367934300000
    },
    {
        "id": 186,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367935200000
    },
    {
        "id": 193,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367936100000
    },
    {
        "id": 194,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367937900000
    },
    {
        "id": 195,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367938800000
    },
    {
        "id": 180,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367939700000
    },
    {
        "id": 182,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367940600000
    },
    {
        "id": 197,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367941500000
    },
    {
        "id": 181,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367942400000
    },
    {
        "id": 183,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367943300000
    },
    {
        "id": 184,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367944200000
    },
    {
        "id": 198,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367945100000
    },
    {
        "id": 185,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367946000000
    },
    {
        "id": 199,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367946900000
    },
    {
        "id": 200,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367947800000
    },
    {
        "id": 201,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367948700000
    },
    {
        "id": 202,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367949600000
    },
    {
        "id": 203,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367950500000
    },
    {
        "id": 204,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367951400000
    },
    {
        "id": 205,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367952300000
    },
    {
        "id": 189,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367953200000
    },
    {
        "id": 192,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367954100000
    },
    {
        "id": 207,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367955000000
    },
    {
        "id": 206,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367955900000
    },
    {
        "id": 208,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367956800000
    },
    {
        "id": 209,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367958600000
    },
    {
        "id": 196,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367959500000
    },
    {
        "id": 210,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367961300000
    },
    {
        "id": 216,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367962200000
    },
    {
        "id": 211,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367963100000
    },
    {
        "id": 212,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367964000000
    },
    {
        "id": 220,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367964900000
    },
    {
        "id": 213,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367965800000
    },
    {
        "id": 214,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367966700000
    },
    {
        "id": 215,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367967600000
    },
    {
        "id": 234,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367968500000
    },
    {
        "id": 219,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367969400000
    },
    {
        "id": 217,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367970300000
    },
    {
        "id": 230,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367971200000
    },
    {
        "id": 225,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367972100000
    },
    {
        "id": 218,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367973000000
    },
    {
        "id": 223,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367973900000
    },
    {
        "id": 221,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367974800000
    },
    {
        "id": 222,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367975700000
    },
    {
        "id": 229,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367976600000
    },
    {
        "id": 231,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367977500000
    },
    {
        "id": 228,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367978400000
    },
    {
        "id": 224,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367979300000
    },
    {
        "id": 227,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367980200000
    },
    {
        "id": 233,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367981100000
    },
    {
        "id": 235,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367982000000
    },
    {
        "id": 232,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367982900000
    },
    {
        "id": 237,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367983800000
    },
    {
        "id": 241,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367984700000
    },
    {
        "id": 236,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367985600000
    },
    {
        "id": 240,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367986500000
    },
    {
        "id": 239,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367987400000
    },
    {
        "id": 226,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367988300000
    },
    {
        "id": 238,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367990100000
    },
    {
        "id": 242,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367991000000
    },
    {
        "id": 243,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367991900000
    },
    {
        "id": 244,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367992800000
    },
    {
        "id": 245,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367993700000
    },
    {
        "id": 246,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367994600000
    },
    {
        "id": 247,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367995500000
    },
    {
        "id": 248,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367996400000
    },
    {
        "id": 249,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367997300000
    },
    {
        "id": 250,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367998200000
    },
    {
        "id": 251,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1367999100000
    },
    {
        "id": 252,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368000000000
    },
    {
        "id": 257,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368000900000
    },
    {
        "id": 253,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368001800000
    },
    {
        "id": 254,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368002700000
    },
    {
        "id": 255,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368003600000
    },
    {
        "id": 256,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368004500000
    },
    {
        "id": 259,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368005400000
    },
    {
        "id": 258,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368006300000
    },
    {
        "id": 266,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368009000000
    },
    {
        "id": 260,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368011700000
    },
    {
        "id": 265,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368012600000
    },
    {
        "id": 263,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368013500000
    },
    {
        "id": 264,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368014400000
    },
    {
        "id": 261,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368015300000
    },
    {
        "id": 262,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368016200000
    },
    {
        "id": 267,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368017100000
    },
    {
        "id": 270,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368018000000
    },
    {
        "id": 268,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368018900000
    },
    {
        "id": 269,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368019800000
    },
    {
        "id": 275,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368020700000
    },
    {
        "id": 272,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368021600000
    },
    {
        "id": 276,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368022500000
    },
    {
        "id": 273,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368023400000
    },
    {
        "id": 271,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368024300000
    },
    {
        "id": 282,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368026100000
    },
    {
        "id": 285,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368027000000
    },
    {
        "id": 286,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368027900000
    },
    {
        "id": 277,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368028800000
    },
    {
        "id": 287,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368029700000
    },
    {
        "id": 278,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368030600000
    },
    {
        "id": 288,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368031500000
    },
    {
        "id": 279,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368032400000
    },
    {
        "id": 289,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368033300000
    },
    {
        "id": 274,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368034200000
    },
    {
        "id": 290,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368035100000
    },
    {
        "id": 291,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368036000000
    },
    {
        "id": 280,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368036900000
    },
    {
        "id": 294,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368037800000
    },
    {
        "id": 292,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368038700000
    },
    {
        "id": 293,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368039600000
    },
    {
        "id": 295,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368040500000
    },
    {
        "id": 283,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368041400000
    },
    {
        "id": 297,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368042300000
    },
    {
        "id": 281,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368043200000
    },
    {
        "id": 296,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368044100000
    },
    {
        "id": 298,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368045900000
    },
    {
        "id": 284,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368046800000
    },
    {
        "id": 301,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368047700000
    },
    {
        "id": 299,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368048600000
    },
    {
        "id": 300,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368049500000
    },
    {
        "id": 302,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368050400000
    },
    {
        "id": 303,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368051300000
    },
    {
        "id": 304,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368052200000
    },
    {
        "id": 305,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368053100000
    },
    {
        "id": 309,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368054000000
    },
    {
        "id": 314,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368054900000
    },
    {
        "id": 310,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368055800000
    },
    {
        "id": 307,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368056700000
    },
    {
        "id": 306,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368057600000
    },
    {
        "id": 315,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368058500000
    },
    {
        "id": 313,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368059400000
    },
    {
        "id": 311,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368061200000
    },
    {
        "id": 308,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368062100000
    },
    {
        "id": 319,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368063000000
    },
    {
        "id": 316,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368063900000
    },
    {
        "id": 312,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368064800000
    },
    {
        "id": 318,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368065700000
    },
    {
        "id": 317,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368066600000
    },
    {
        "id": 329,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368068400000
    },
    {
        "id": 325,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368069300000
    },
    {
        "id": 324,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368070200000
    },
    {
        "id": 320,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368071100000
    },
    {
        "id": 328,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368072000000
    },
    {
        "id": 326,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368072900000
    },
    {
        "id": 321,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368073800000
    },
    {
        "id": 327,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368074700000
    },
    {
        "id": 330,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368075600000
    },
    {
        "id": 322,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368076500000
    },
    {
        "id": 338,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368077400000
    },
    {
        "id": 332,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368078300000
    },
    {
        "id": 323,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368079200000
    },
    {
        "id": 334,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368080100000
    },
    {
        "id": 336,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368081000000
    },
    {
        "id": 333,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368081900000
    },
    {
        "id": 335,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368082800000
    },
    {
        "id": 331,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368083700000
    },
    {
        "id": 337,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368084600000
    },
    {
        "id": 339,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368085500000
    },
    {
        "id": 340,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368086400000
    },
    {
        "id": 341,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368089100000
    },
    {
        "id": 342,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368091800000
    },
    {
        "id": 343,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368092700000
    },
    {
        "id": 344,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368093600000
    },
    {
        "id": 345,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368094500000
    },
    {
        "id": 346,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368095400000
    },
    {
        "id": 348,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368098100000
    },
    {
        "id": 347,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368099000000
    },
    {
        "id": 349,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368099900000
    },
    {
        "id": 350,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368100800000
    },
    {
        "id": 354,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368101700000
    },
    {
        "id": 352,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368102600000
    },
    {
        "id": 351,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368103500000
    },
    {
        "id": 355,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368104400000
    },
    {
        "id": 356,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368105300000
    },
    {
        "id": 357,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368106200000
    },
    {
        "id": 353,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368107100000
    },
    {
        "id": 358,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368108000000
    },
    {
        "id": 359,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368108900000
    },
    {
        "id": 361,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368109800000
    },
    {
        "id": 360,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368110700000
    },
    {
        "id": 366,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368111600000
    },
    {
        "id": 365,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368112500000
    },
    {
        "id": 367,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368113400000
    },
    {
        "id": 370,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368114300000
    },
    {
        "id": 368,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368115200000
    },
    {
        "id": 369,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368116100000
    },
    {
        "id": 371,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368117000000
    },
    {
        "id": 372,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368118800000
    },
    {
        "id": 377,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368119700000
    },
    {
        "id": 362,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368120600000
    },
    {
        "id": 363,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368121500000
    },
    {
        "id": 364,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368122400000
    },
    {
        "id": 373,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368123300000
    },
    {
        "id": 374,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368124200000
    },
    {
        "id": 378,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368126000000
    },
    {
        "id": 375,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368126900000
    },
    {
        "id": 376,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368127800000
    },
    {
        "id": 380,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368128700000
    },
    {
        "id": 382,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368130500000
    },
    {
        "id": 381,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368131400000
    },
    {
        "id": 383,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368132300000
    },
    {
        "id": 387,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368133200000
    },
    {
        "id": 388,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368134100000
    },
    {
        "id": 384,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368135000000
    },
    {
        "id": 379,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368135900000
    },
    {
        "id": 386,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368136800000
    },
    {
        "id": 390,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368137700000
    },
    {
        "id": 389,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368138600000
    },
    {
        "id": 385,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368139500000
    },
    {
        "id": 391,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368141300000
    },
    {
        "id": 392,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368142200000
    },
    {
        "id": 394,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368143100000
    },
    {
        "id": 393,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368144000000
    },
    {
        "id": 395,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368144900000
    },
    {
        "id": 401,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368145800000
    },
    {
        "id": 396,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368147600000
    },
    {
        "id": 398,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368148500000
    },
    {
        "id": 399,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368149400000
    },
    {
        "id": 400,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368151200000
    },
    {
        "id": 397,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368153000000
    },
    {
        "id": 403,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368153900000
    },
    {
        "id": 411,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368156600000
    },
    {
        "id": 412,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368157500000
    },
    {
        "id": 402,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368158400000
    },
    {
        "id": 415,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368159300000
    },
    {
        "id": 417,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368160200000
    },
    {
        "id": 404,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368161100000
    },
    {
        "id": 420,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368162000000
    },
    {
        "id": 407,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368162900000
    },
    {
        "id": 421,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368163800000
    },
    {
        "id": 408,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368164700000
    },
    {
        "id": 406,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368166500000
    },
    {
        "id": 422,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368167400000
    },
    {
        "id": 409,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368169200000
    },
    {
        "id": 414,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368170100000
    },
    {
        "id": 413,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368171000000
    },
    {
        "id": 405,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368171900000
    },
    {
        "id": 423,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368172800000
    },
    {
        "id": 410,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368173700000
    },
    {
        "id": 416,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368174600000
    },
    {
        "id": 425,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368175500000
    },
    {
        "id": 424,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368176400000
    },
    {
        "id": 419,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368177300000
    },
    {
        "id": 426,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368178200000
    },
    {
        "id": 418,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368179100000
    },
    {
        "id": 427,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368180000000
    },
    {
        "id": 428,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368181800000
    },
    {
        "id": 429,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368182700000
    },
    {
        "id": 430,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368184500000
    },
    {
        "id": 431,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368185400000
    },
    {
        "id": 432,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368186300000
    },
    {
        "id": 433,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368187200000
    },
    {
        "id": 434,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368188100000
    },
    {
        "id": 439,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368189000000
    },
    {
        "id": 435,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368189900000
    },
    {
        "id": 437,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368190800000
    },
    {
        "id": 436,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368191700000
    },
    {
        "id": 444,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368192600000
    },
    {
        "id": 441,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368193500000
    },
    {
        "id": 445,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368194400000
    },
    {
        "id": 438,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368195300000
    },
    {
        "id": 442,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368196200000
    },
    {
        "id": 443,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368197100000
    },
    {
        "id": 447,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368198000000
    },
    {
        "id": 440,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368198900000
    },
    {
        "id": 448,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368199800000
    },
    {
        "id": 446,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368200700000
    },
    {
        "id": 452,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368201600000
    },
    {
        "id": 453,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368202500000
    },
    {
        "id": 449,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368203400000
    },
    {
        "id": 451,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368204300000
    },
    {
        "id": 450,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368205200000
    },
    {
        "id": 455,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368206100000
    },
    {
        "id": 458,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368207000000
    },
    {
        "id": 456,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368207900000
    },
    {
        "id": 460,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368208800000
    },
    {
        "id": 466,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368209700000
    },
    {
        "id": 462,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368210600000
    },
    {
        "id": 465,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368211500000
    },
    {
        "id": 467,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368212400000
    },
    {
        "id": 468,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368213300000
    },
    {
        "id": 469,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368214200000
    },
    {
        "id": 470,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368215100000
    },
    {
        "id": 471,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368216000000
    },
    {
        "id": 472,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368216900000
    },
    {
        "id": 473,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368217800000
    },
    {
        "id": 475,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368218700000
    },
    {
        "id": 474,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368219600000
    },
    {
        "id": 457,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368221400000
    },
    {
        "id": 454,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368222300000
    },
    {
        "id": 459,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368223200000
    },
    {
        "id": 476,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368224100000
    },
    {
        "id": 463,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368225000000
    },
    {
        "id": 479,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368225900000
    },
    {
        "id": 461,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368226800000
    },
    {
        "id": 464,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368227700000
    },
    {
        "id": 477,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368228600000
    },
    {
        "id": 478,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368229500000
    },
    {
        "id": 480,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368230400000
    },
    {
        "id": 481,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368231300000
    },
    {
        "id": 482,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368232200000
    },
    {
        "id": 489,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368233100000
    },
    {
        "id": 483,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368234000000
    },
    {
        "id": 485,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368234900000
    },
    {
        "id": 487,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368236700000
    },
    {
        "id": 484,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368237600000
    },
    {
        "id": 486,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368238500000
    },
    {
        "id": 488,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368239400000
    },
    {
        "id": 490,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368240300000
    },
    {
        "id": 496,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368241200000
    },
    {
        "id": 493,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368242100000
    },
    {
        "id": 498,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368243900000
    },
    {
        "id": 495,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368244800000
    },
    {
        "id": 491,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368245700000
    },
    {
        "id": 492,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368246600000
    },
    {
        "id": 501,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368247500000
    },
    {
        "id": 499,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368248400000
    },
    {
        "id": 494,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368249300000
    },
    {
        "id": 497,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368250200000
    },
    {
        "id": 505,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368251100000
    },
    {
        "id": 504,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368252000000
    },
    {
        "id": 513,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368252900000
    },
    {
        "id": 509,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368253800000
    },
    {
        "id": 506,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368255600000
    },
    {
        "id": 514,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368257400000
    },
    {
        "id": 502,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368259200000
    },
    {
        "id": 515,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368260100000
    },
    {
        "id": 500,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368261000000
    },
    {
        "id": 516,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368261900000
    },
    {
        "id": 503,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368262800000
    },
    {
        "id": 507,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368263700000
    },
    {
        "id": 517,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368264600000
    },
    {
        "id": 510,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368265500000
    },
    {
        "id": 508,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368266400000
    },
    {
        "id": 511,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368268200000
    },
    {
        "id": 519,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368269100000
    },
    {
        "id": 518,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368270000000
    },
    {
        "id": 520,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368271800000
    },
    {
        "id": 512,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368272700000
    },
    {
        "id": 521,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368274500000
    },
    {
        "id": 522,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368275400000
    },
    {
        "id": 524,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368276300000
    },
    {
        "id": 523,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368277200000
    },
    {
        "id": 525,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368278100000
    },
    {
        "id": 526,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368279000000
    },
    {
        "id": 530,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368279900000
    },
    {
        "id": 527,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368280800000
    },
    {
        "id": 528,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368281700000
    },
    {
        "id": 533,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368282600000
    },
    {
        "id": 529,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368283500000
    },
    {
        "id": 532,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368285300000
    },
    {
        "id": 535,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368286200000
    },
    {
        "id": 531,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368287100000
    },
    {
        "id": 536,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368288000000
    },
    {
        "id": 537,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368290700000
    },
    {
        "id": 539,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368292500000
    },
    {
        "id": 540,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368293400000
    },
    {
        "id": 534,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368296100000
    },
    {
        "id": 541,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368297000000
    },
    {
        "id": 542,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368298800000
    },
    {
        "id": 538,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368299700000
    },
    {
        "id": 548,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368301500000
    },
    {
        "id": 546,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368302400000
    },
    {
        "id": 545,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368303300000
    },
    {
        "id": 547,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368304200000
    },
    {
        "id": 549,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368306000000
    },
    {
        "id": 550,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368306900000
    },
    {
        "id": 551,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368307800000
    },
    {
        "id": 555,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368308700000
    },
    {
        "id": 553,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368309600000
    },
    {
        "id": 552,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368310500000
    },
    {
        "id": 554,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368311400000
    },
    {
        "id": 544,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368313200000
    },
    {
        "id": 543,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368314100000
    },
    {
        "id": 556,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368316800000
    },
    {
        "id": 557,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368318600000
    },
    {
        "id": 558,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368320400000
    },
    {
        "id": 560,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368323100000
    },
    {
        "id": 559,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368324000000
    },
    {
        "id": 561,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368324900000
    },
    {
        "id": 562,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368325800000
    },
    {
        "id": 563,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368326700000
    },
    {
        "id": 567,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368327600000
    },
    {
        "id": 564,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368328500000
    },
    {
        "id": 566,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368329400000
    },
    {
        "id": 569,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368330300000
    },
    {
        "id": 570,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368331200000
    },
    {
        "id": 568,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368332100000
    },
    {
        "id": 565,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368333000000
    },
    {
        "id": 572,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368333900000
    },
    {
        "id": 575,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368334800000
    },
    {
        "id": 574,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368335700000
    },
    {
        "id": 576,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368336600000
    },
    {
        "id": 578,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368337500000
    },
    {
        "id": 588,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368338400000
    },
    {
        "id": 577,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368339300000
    },
    {
        "id": 571,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368340200000
    },
    {
        "id": 579,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368341100000
    },
    {
        "id": 589,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368342900000
    },
    {
        "id": 573,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368343800000
    },
    {
        "id": 591,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368346500000
    },
    {
        "id": 580,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368347400000
    },
    {
        "id": 592,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368348300000
    },
    {
        "id": 585,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368349200000
    },
    {
        "id": 594,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368350100000
    },
    {
        "id": 581,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368351000000
    },
    {
        "id": 586,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368352800000
    },
    {
        "id": 584,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368354600000
    },
    {
        "id": 597,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368355500000
    },
    {
        "id": 590,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368356400000
    },
    {
        "id": 598,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368357300000
    },
    {
        "id": 582,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368358200000
    },
    {
        "id": 583,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368359100000
    },
    {
        "id": 587,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368360900000
    },
    {
        "id": 593,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368361800000
    },
    {
        "id": 595,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368362700000
    },
    {
        "id": 596,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368364500000
    },
    {
        "id": 599,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368365400000
    },
    {
        "id": 600,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368366300000
    },
    {
        "id": 601,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368368100000
    },
    {
        "id": 604,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368369900000
    },
    {
        "id": 602,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368370800000
    },
    {
        "id": 605,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368371700000
    },
    {
        "id": 603,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368372600000
    },
    {
        "id": 607,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368373500000
    },
    {
        "id": 610,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368374400000
    },
    {
        "id": 609,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368375300000
    },
    {
        "id": 611,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368376200000
    },
    {
        "id": 613,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368377100000
    },
    {
        "id": 606,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368378000000
    },
    {
        "id": 614,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368378900000
    },
    {
        "id": 608,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368379800000
    },
    {
        "id": 615,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368380700000
    },
    {
        "id": 622,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368381600000
    },
    {
        "id": 626,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368382500000
    },
    {
        "id": 618,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368384300000
    },
    {
        "id": 619,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368385200000
    },
    {
        "id": 612,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368386100000
    },
    {
        "id": 620,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368387000000
    },
    {
        "id": 621,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368387900000
    },
    {
        "id": 623,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368388800000
    },
    {
        "id": 616,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368389700000
    },
    {
        "id": 627,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368390600000
    },
    {
        "id": 628,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368391500000
    },
    {
        "id": 617,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368392400000
    },
    {
        "id": 629,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368393300000
    },
    {
        "id": 635,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368394200000
    },
    {
        "id": 624,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368395100000
    },
    {
        "id": 630,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368396000000
    },
    {
        "id": 636,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368396900000
    },
    {
        "id": 631,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368397800000
    },
    {
        "id": 637,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368398700000
    },
    {
        "id": 639,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368399600000
    },
    {
        "id": 638,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368400500000
    },
    {
        "id": 640,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368401400000
    },
    {
        "id": 625,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368402300000
    },
    {
        "id": 632,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368403200000
    },
    {
        "id": 641,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368404100000
    },
    {
        "id": 642,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368405000000
    },
    {
        "id": 643,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368405900000
    },
    {
        "id": 644,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368406800000
    },
    {
        "id": 633,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368407700000
    },
    {
        "id": 645,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368408600000
    },
    {
        "id": 634,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368409500000
    },
    {
        "id": 646,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368410400000
    },
    {
        "id": 647,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368411300000
    },
    {
        "id": 649,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368412200000
    },
    {
        "id": 648,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368413100000
    },
    {
        "id": 650,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368414000000
    },
    {
        "id": 655,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368414900000
    },
    {
        "id": 652,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368415800000
    },
    {
        "id": 651,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368416700000
    },
    {
        "id": 653,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368417600000
    },
    {
        "id": 659,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368418500000
    },
    {
        "id": 660,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368419400000
    },
    {
        "id": 654,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368420300000
    },
    {
        "id": 656,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368422100000
    },
    {
        "id": 662,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368424800000
    },
    {
        "id": 657,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368425700000
    },
    {
        "id": 658,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368426600000
    },
    {
        "id": 665,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368427500000
    },
    {
        "id": 667,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368428400000
    },
    {
        "id": 666,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368429300000
    },
    {
        "id": 663,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368431100000
    },
    {
        "id": 669,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368432000000
    },
    {
        "id": 661,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368432900000
    },
    {
        "id": 664,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368435600000
    },
    {
        "id": 668,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368436500000
    },
    {
        "id": 670,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368437400000
    },
    {
        "id": 672,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368438300000
    },
    {
        "id": 675,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368440100000
    },
    {
        "id": 676,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368441000000
    },
    {
        "id": 677,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368441900000
    },
    {
        "id": 678,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368442800000
    },
    {
        "id": 673,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368443700000
    },
    {
        "id": 679,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368444600000
    },
    {
        "id": 680,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368445500000
    },
    {
        "id": 671,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368448200000
    },
    {
        "id": 681,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368449100000
    },
    {
        "id": 682,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368450000000
    },
    {
        "id": 684,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368452700000
    },
    {
        "id": 683,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368453600000
    },
    {
        "id": 674,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368454500000
    },
    {
        "id": 685,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368455400000
    },
    {
        "id": 686,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368456300000
    },
    {
        "id": 694,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368458100000
    },
    {
        "id": 687,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368459000000
    },
    {
        "id": 688,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368459900000
    },
    {
        "id": 690,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368462600000
    },
    {
        "id": 691,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368464400000
    },
    {
        "id": 689,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368465300000
    },
    {
        "id": 692,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368466200000
    },
    {
        "id": 693,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368467100000
    },
    {
        "id": 697,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368468000000
    },
    {
        "id": 695,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368468900000
    },
    {
        "id": 696,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368469800000
    },
    {
        "id": 701,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368470700000
    },
    {
        "id": 698,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368471600000
    },
    {
        "id": 700,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368472500000
    },
    {
        "id": 702,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368473400000
    },
    {
        "id": 699,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368474300000
    },
    {
        "id": 703,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368475200000
    },
    {
        "id": 707,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368476100000
    },
    {
        "id": 704,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368477000000
    },
    {
        "id": 705,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368477900000
    },
    {
        "id": 706,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368478800000
    },
    {
        "id": 1,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368480600000
    },
    {
        "id": 708,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1368481500000
    },
    {
        "id": 3038,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369008000000
    },
    {
        "id": 2111,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2683",
        "reactivePower": "2683",
        "timeInstant": 1369008900000
    },
    {
        "id": 3026,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369009800000
    },
    {
        "id": 3035,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369010700000
    },
    {
        "id": 3041,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369011600000
    },
    {
        "id": 3029,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369012500000
    },
    {
        "id": 1241,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369013400000
    },
    {
        "id": 6410,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2710",
        "reactivePower": "2710",
        "timeInstant": 1369014300000
    },
    {
        "id": 3044,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369015200000
    },
    {
        "id": 3056,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369016100000
    },
    {
        "id": 3059,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369017000000
    },
    {
        "id": 3062,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369017900000
    },
    {
        "id": 3050,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369018800000
    },
    {
        "id": 3047,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369019700000
    },
    {
        "id": 3053,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369020600000
    },
    {
        "id": 3065,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369021500000
    },
    {
        "id": 3080,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369022400000
    },
    {
        "id": 3068,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369023300000
    },
    {
        "id": 3083,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369024200000
    },
    {
        "id": 3071,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369025100000
    },
    {
        "id": 1247,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369026000000
    },
    {
        "id": 3074,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369026900000
    },
    {
        "id": 3077,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369027800000
    },
    {
        "id": 3092,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369028700000
    },
    {
        "id": 3089,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369029600000
    },
    {
        "id": 3095,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369030500000
    },
    {
        "id": 3107,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369031400000
    },
    {
        "id": 3110,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369032300000
    },
    {
        "id": 1253,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369033200000
    },
    {
        "id": 3086,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369034100000
    },
    {
        "id": 3098,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369035000000
    },
    {
        "id": 3113,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369035900000
    },
    {
        "id": 3116,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369036800000
    },
    {
        "id": 3119,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369037700000
    },
    {
        "id": 3122,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369038600000
    },
    {
        "id": 3125,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369039500000
    },
    {
        "id": 3104,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369040400000
    },
    {
        "id": 3128,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369041300000
    },
    {
        "id": 3101,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369042200000
    },
    {
        "id": 3131,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369043100000
    },
    {
        "id": 2147,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369044000000
    },
    {
        "id": 3137,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369044900000
    },
    {
        "id": 3140,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369045800000
    },
    {
        "id": 3146,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369046700000
    },
    {
        "id": 3179,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369047600000
    },
    {
        "id": 3143,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369048500000
    },
    {
        "id": 3149,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369049400000
    },
    {
        "id": 2174,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369050300000
    },
    {
        "id": 2138,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369051200000
    },
    {
        "id": 3155,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369052100000
    },
    {
        "id": 2168,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369053000000
    },
    {
        "id": 2156,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369053900000
    },
    {
        "id": 3152,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369054800000
    },
    {
        "id": 3182,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369055700000
    },
    {
        "id": 3191,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369056600000
    },
    {
        "id": 3194,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369057500000
    },
    {
        "id": 2150,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369058400000
    },
    {
        "id": 2141,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369059300000
    },
    {
        "id": 3170,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369060200000
    },
    {
        "id": 3206,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369061100000
    },
    {
        "id": 3173,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369062000000
    },
    {
        "id": 3221,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369062900000
    },
    {
        "id": 3176,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369063800000
    },
    {
        "id": 3203,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369064700000
    },
    {
        "id": 3209,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369065600000
    },
    {
        "id": 3212,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369066500000
    },
    {
        "id": 3218,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369067400000
    },
    {
        "id": 3215,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369068300000
    },
    {
        "id": 3233,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369069200000
    },
    {
        "id": 3236,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369070100000
    },
    {
        "id": 3200,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369071000000
    },
    {
        "id": 3188,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369071900000
    },
    {
        "id": 3227,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369072800000
    },
    {
        "id": 3239,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369073700000
    },
    {
        "id": 1271,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369074600000
    },
    {
        "id": 3245,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369075500000
    },
    {
        "id": 3251,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369076400000
    },
    {
        "id": 3254,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369077300000
    },
    {
        "id": 3257,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369078200000
    },
    {
        "id": 3224,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369079100000
    },
    {
        "id": 3230,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369080000000
    },
    {
        "id": 3260,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369080900000
    },
    {
        "id": 3275,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369081800000
    },
    {
        "id": 3266,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369082700000
    },
    {
        "id": 3263,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369083600000
    },
    {
        "id": 1268,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369084500000
    },
    {
        "id": 3242,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369085400000
    },
    {
        "id": 3269,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369086300000
    },
    {
        "id": 3248,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369087200000
    },
    {
        "id": 3272,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369088100000
    },
    {
        "id": 3278,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369089000000
    },
    {
        "id": 3284,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369089900000
    },
    {
        "id": 3281,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369090800000
    },
    {
        "id": 3287,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369091700000
    },
    {
        "id": 3290,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369092600000
    },
    {
        "id": 3299,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369093500000
    },
    {
        "id": 3296,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369094400000
    },
    {
        "id": 3314,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369095300000
    },
    {
        "id": 3293,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369096200000
    },
    {
        "id": 2177,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2684",
        "reactivePower": "2684",
        "timeInstant": 1369097100000
    },
    {
        "id": 3308,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369098000000
    },
    {
        "id": 3302,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369098900000
    },
    {
        "id": 3317,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369099800000
    },
    {
        "id": 3311,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369100700000
    },
    {
        "id": 3335,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369101600000
    },
    {
        "id": 3332,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369102500000
    },
    {
        "id": 3338,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369103400000
    },
    {
        "id": 3320,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369104300000
    },
    {
        "id": 3353,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369105200000
    },
    {
        "id": 3326,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369106100000
    },
    {
        "id": 3323,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369107000000
    },
    {
        "id": 3374,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369107900000
    },
    {
        "id": 3356,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369108800000
    },
    {
        "id": 3341,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369109700000
    },
    {
        "id": 3344,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369110600000
    },
    {
        "id": 3329,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369111500000
    },
    {
        "id": 3362,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369112400000
    },
    {
        "id": 3377,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369113300000
    },
    {
        "id": 3347,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369114200000
    },
    {
        "id": 3365,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369115100000
    },
    {
        "id": 2195,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369116000000
    },
    {
        "id": 3371,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369116900000
    },
    {
        "id": 2189,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369117800000
    },
    {
        "id": 2201,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369118700000
    },
    {
        "id": 3380,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369119600000
    },
    {
        "id": 3386,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369120500000
    },
    {
        "id": 3383,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369121400000
    },
    {
        "id": 3401,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369122300000
    },
    {
        "id": 3395,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369123200000
    },
    {
        "id": 3413,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369124100000
    },
    {
        "id": 3392,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369125000000
    },
    {
        "id": 3389,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369125900000
    },
    {
        "id": 3425,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369126800000
    },
    {
        "id": 3419,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369127700000
    },
    {
        "id": 3404,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369128600000
    },
    {
        "id": 3407,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369129500000
    },
    {
        "id": 3410,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369130400000
    },
    {
        "id": 3359,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369131300000
    },
    {
        "id": 3416,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369132200000
    },
    {
        "id": 3422,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369133100000
    },
    {
        "id": 3428,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369134000000
    },
    {
        "id": 3431,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369134900000
    },
    {
        "id": 3437,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369135800000
    },
    {
        "id": 3434,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369136700000
    },
    {
        "id": 3440,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369137600000
    },
    {
        "id": 3443,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369138500000
    },
    {
        "id": 3446,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369139400000
    },
    {
        "id": 3452,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369140300000
    },
    {
        "id": 3458,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369141200000
    },
    {
        "id": 3449,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369142100000
    },
    {
        "id": 3461,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369143000000
    },
    {
        "id": 3464,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369143900000
    },
    {
        "id": 3470,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369144800000
    },
    {
        "id": 3467,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369145700000
    },
    {
        "id": 3455,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369146600000
    },
    {
        "id": 3479,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369147500000
    },
    {
        "id": 3473,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369148400000
    },
    {
        "id": 3482,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369149300000
    },
    {
        "id": 3500,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369150200000
    },
    {
        "id": 3476,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369151100000
    },
    {
        "id": 3485,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369152000000
    },
    {
        "id": 3503,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369152900000
    },
    {
        "id": 3515,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369153800000
    },
    {
        "id": 3506,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369154700000
    },
    {
        "id": 3530,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369155600000
    },
    {
        "id": 1310,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369156500000
    },
    {
        "id": 3488,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369157400000
    },
    {
        "id": 3521,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369158300000
    },
    {
        "id": 2210,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369159200000
    },
    {
        "id": 3542,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369160100000
    },
    {
        "id": 3545,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369161000000
    },
    {
        "id": 3491,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369161900000
    },
    {
        "id": 2219,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369162800000
    },
    {
        "id": 2225,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "173",
        "reactivePower": "173",
        "timeInstant": 1369163700000
    },
    {
        "id": 3494,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369164600000
    },
    {
        "id": 1,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369165500000
    },
    {
        "id": 3554,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369166400000
    },
    {
        "id": 3557,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369167300000
    },
    {
        "id": 3560,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369168200000
    },
    {
        "id": 3518,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369169100000
    },
    {
        "id": 3497,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369170000000
    },
    {
        "id": 3512,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369170900000
    },
    {
        "id": 3563,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369171800000
    },
    {
        "id": 1316,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369172700000
    },
    {
        "id": 3533,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369173600000
    },
    {
        "id": 3539,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369174500000
    },
    {
        "id": 3527,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369175400000
    },
    {
        "id": 3536,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369176300000
    },
    {
        "id": 3566,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369177200000
    },
    {
        "id": 3569,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369178100000
    },
    {
        "id": 3572,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369179000000
    },
    {
        "id": 3575,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369179900000
    },
    {
        "id": 3584,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369180800000
    },
    {
        "id": 2237,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2702",
        "reactivePower": "2702",
        "timeInstant": 1369181700000
    },
    {
        "id": 3581,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369182600000
    },
    {
        "id": 3608,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369183500000
    },
    {
        "id": 3590,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369184400000
    },
    {
        "id": 3587,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369185300000
    },
    {
        "id": 3611,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369186200000
    },
    {
        "id": 3614,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369187100000
    },
    {
        "id": 2231,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2682",
        "reactivePower": "2682",
        "timeInstant": 1369188000000
    },
    {
        "id": 3593,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369188900000
    },
    {
        "id": 3620,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369189800000
    },
    {
        "id": 3596,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369190700000
    },
    {
        "id": 3599,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369191600000
    },
    {
        "id": 3602,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369192500000
    },
    {
        "id": 3605,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369193400000
    },
    {
        "id": 3623,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369194300000
    },
    {
        "id": 3632,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369195200000
    },
    {
        "id": 3638,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369196100000
    },
    {
        "id": 6896,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "137",
        "reactivePower": "137",
        "timeInstant": 1369197000000
    },
    {
        "id": 3641,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369197900000
    },
    {
        "id": 3626,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369198800000
    },
    {
        "id": 3644,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369199700000
    },
    {
        "id": 3647,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369200600000
    },
    {
        "id": 3656,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369201500000
    },
    {
        "id": 3659,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369202400000
    },
    {
        "id": 3662,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369203300000
    },
    {
        "id": 3629,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369204200000
    },
    {
        "id": 3668,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369205100000
    },
    {
        "id": 3674,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369206000000
    },
    {
        "id": 3665,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369206900000
    },
    {
        "id": 3671,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369207800000
    },
    {
        "id": 3635,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369208700000
    },
    {
        "id": 3650,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369209600000
    },
    {
        "id": 3683,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369210500000
    },
    {
        "id": 3653,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369211400000
    },
    {
        "id": 3680,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369212300000
    },
    {
        "id": 3677,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369213200000
    },
    {
        "id": 3692,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369214100000
    },
    {
        "id": 3695,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369215000000
    },
    {
        "id": 3701,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369215900000
    },
    {
        "id": 3686,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369216800000
    },
    {
        "id": 3707,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369217700000
    },
    {
        "id": 3710,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369218600000
    },
    {
        "id": 3704,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369219500000
    },
    {
        "id": 3689,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369220400000
    },
    {
        "id": 3698,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369221300000
    },
    {
        "id": 3713,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369222200000
    },
    {
        "id": 1379,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369223100000
    },
    {
        "id": 3716,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369224000000
    },
    {
        "id": 3719,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369224900000
    },
    {
        "id": 7040,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369225800000
    },
    {
        "id": 3725,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369226700000
    },
    {
        "id": 3722,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369227600000
    },
    {
        "id": 3728,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369228500000
    },
    {
        "id": 3731,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369229400000
    },
    {
        "id": 3755,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369230300000
    },
    {
        "id": 3734,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369231200000
    },
    {
        "id": 3758,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369232100000
    },
    {
        "id": 3776,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369233000000
    },
    {
        "id": 3761,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369233900000
    },
    {
        "id": 3773,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369234800000
    },
    {
        "id": 3767,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369235700000
    },
    {
        "id": 3737,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369236600000
    },
    {
        "id": 3740,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369237500000
    },
    {
        "id": 3791,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369238400000
    },
    {
        "id": 3746,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369239300000
    },
    {
        "id": 1400,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369240200000
    },
    {
        "id": 3743,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369241100000
    },
    {
        "id": 3749,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369242000000
    },
    {
        "id": 3764,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369242900000
    },
    {
        "id": 3782,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369243800000
    },
    {
        "id": 3794,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369244700000
    },
    {
        "id": 1412,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369245600000
    },
    {
        "id": 1418,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369246500000
    },
    {
        "id": 3779,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369247400000
    },
    {
        "id": 1406,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369248300000
    },
    {
        "id": 3752,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369249200000
    },
    {
        "id": 3806,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369250100000
    },
    {
        "id": 3800,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369251000000
    },
    {
        "id": 2264,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2663",
        "reactivePower": "2663",
        "timeInstant": 1369251900000
    },
    {
        "id": 3818,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369252800000
    },
    {
        "id": 3785,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369253700000
    },
    {
        "id": 3812,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369254600000
    },
    {
        "id": 3788,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369255500000
    },
    {
        "id": 3770,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369256400000
    },
    {
        "id": 3809,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369257300000
    },
    {
        "id": 3821,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369258200000
    },
    {
        "id": 3815,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369259100000
    },
    {
        "id": 7154,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2691",
        "reactivePower": "2691",
        "timeInstant": 1369260000000
    },
    {
        "id": 3824,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369260900000
    },
    {
        "id": 3830,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369261800000
    },
    {
        "id": 3833,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369262700000
    },
    {
        "id": 3836,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369263600000
    },
    {
        "id": 3827,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369264500000
    },
    {
        "id": 3803,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369265400000
    },
    {
        "id": 7172,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2744",
        "reactivePower": "2744",
        "timeInstant": 1369266300000
    },
    {
        "id": 3839,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369267200000
    },
    {
        "id": 3842,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369268100000
    },
    {
        "id": 1427,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369269000000
    },
    {
        "id": 3845,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369269900000
    },
    {
        "id": 3851,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369270800000
    },
    {
        "id": 3848,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369271700000
    },
    {
        "id": 3854,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369272600000
    },
    {
        "id": 3857,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369273500000
    },
    {
        "id": 3863,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369274400000
    },
    {
        "id": 3860,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369275300000
    },
    {
        "id": 3875,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369276200000
    },
    {
        "id": 3866,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369277100000
    },
    {
        "id": 3869,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369278000000
    },
    {
        "id": 3872,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369278900000
    },
    {
        "id": 3893,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369279800000
    },
    {
        "id": 3878,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369280700000
    },
    {
        "id": 3881,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369281600000
    },
    {
        "id": 3884,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369282500000
    },
    {
        "id": 3890,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369283400000
    },
    {
        "id": 3896,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369284300000
    },
    {
        "id": 3908,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369285200000
    },
    {
        "id": 3887,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369286100000
    },
    {
        "id": 3902,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369287000000
    },
    {
        "id": 3899,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369287900000
    },
    {
        "id": 3911,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369288800000
    },
    {
        "id": 3914,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369289700000
    },
    {
        "id": 3905,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369290600000
    },
    {
        "id": 3932,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369291500000
    },
    {
        "id": 3929,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369292400000
    },
    {
        "id": 3926,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369293300000
    },
    {
        "id": 3965,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369294200000
    },
    {
        "id": 3917,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369295100000
    },
    {
        "id": 3938,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369296000000
    },
    {
        "id": 2288,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369296900000
    },
    {
        "id": 2294,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369297800000
    },
    {
        "id": 2285,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369298700000
    },
    {
        "id": 3944,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369299600000
    },
    {
        "id": 3941,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369300500000
    },
    {
        "id": 2318,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369301400000
    },
    {
        "id": 2315,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369302300000
    },
    {
        "id": 3947,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369303200000
    },
    {
        "id": 2339,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369304100000
    },
    {
        "id": 3977,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369305000000
    },
    {
        "id": 7283,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369305900000
    },
    {
        "id": 3974,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369306800000
    },
    {
        "id": 3953,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369307700000
    },
    {
        "id": 3980,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369308600000
    },
    {
        "id": 3959,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369309500000
    },
    {
        "id": 2297,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369310400000
    },
    {
        "id": 3962,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369311300000
    },
    {
        "id": 3986,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369312200000
    },
    {
        "id": 3968,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369313100000
    },
    {
        "id": 3989,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369314000000
    },
    {
        "id": 3992,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369314900000
    },
    {
        "id": 3995,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369315800000
    },
    {
        "id": 4004,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369316700000
    },
    {
        "id": 3998,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369317600000
    },
    {
        "id": 4001,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369318500000
    },
    {
        "id": 4007,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369319400000
    },
    {
        "id": 2303,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369320300000
    },
    {
        "id": 2336,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369321200000
    },
    {
        "id": 4013,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369322100000
    },
    {
        "id": 4109,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369323000000
    },
    {
        "id": 4034,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369323900000
    },
    {
        "id": 4016,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369324800000
    },
    {
        "id": 4055,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369325700000
    },
    {
        "id": 4022,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369326600000
    },
    {
        "id": 4019,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369327500000
    },
    {
        "id": 4025,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369328400000
    },
    {
        "id": 4046,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369329300000
    },
    {
        "id": 4028,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369330200000
    },
    {
        "id": 4049,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369331100000
    },
    {
        "id": 4052,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369332000000
    },
    {
        "id": 2309,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369332900000
    },
    {
        "id": 4094,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369333800000
    },
    {
        "id": 4040,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369334700000
    },
    {
        "id": 4073,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369335600000
    },
    {
        "id": 4070,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369336500000
    },
    {
        "id": 4079,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369337400000
    },
    {
        "id": 4115,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369338300000
    },
    {
        "id": 4112,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369339200000
    },
    {
        "id": 4088,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369340100000
    },
    {
        "id": 4058,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369341000000
    },
    {
        "id": 7388,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2691",
        "reactivePower": "2691",
        "timeInstant": 1369341900000
    },
    {
        "id": 4061,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369342800000
    },
    {
        "id": 4037,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369343700000
    },
    {
        "id": 4064,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369344600000
    },
    {
        "id": 4067,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369345500000
    },
    {
        "id": 1451,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369346400000
    },
    {
        "id": 2354,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2643",
        "reactivePower": "2643",
        "timeInstant": 1369347300000
    },
    {
        "id": 2324,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2692",
        "reactivePower": "2692",
        "timeInstant": 1369348200000
    },
    {
        "id": 2357,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2681",
        "reactivePower": "2681",
        "timeInstant": 1369349100000
    },
    {
        "id": 2369,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2632",
        "reactivePower": "2632",
        "timeInstant": 1369350000000
    },
    {
        "id": 1448,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369100000
    },
    {
        "id": 1469,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369351800000
    },
    {
        "id": 1457,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369352700000
    },
    {
        "id": 2378,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2630",
        "reactivePower": "2630",
        "timeInstant": 1369353600000
    },
    {
        "id": 2381,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2676",
        "reactivePower": "2676",
        "timeInstant": 1369354500000
    },
    {
        "id": 4097,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369355400000
    },
    {
        "id": 1463,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369356300000
    },
    {
        "id": 4085,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369357200000
    },
    {
        "id": 4100,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369358100000
    },
    {
        "id": 2375,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2708",
        "reactivePower": "2708",
        "timeInstant": 1369359000000
    },
    {
        "id": 4124,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369359900000
    },
    {
        "id": 4133,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369360800000
    },
    {
        "id": 1478,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369361700000
    },
    {
        "id": 4127,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369362600000
    },
    {
        "id": 4130,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369363500000
    },
    {
        "id": 4148,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369364400000
    },
    {
        "id": 4154,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369365300000
    },
    {
        "id": 4136,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369366200000
    },
    {
        "id": 4139,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369367100000
    },
    {
        "id": 4157,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369368000000
    },
    {
        "id": 4145,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369368900000
    },
    {
        "id": 4151,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369369800000
    },
    {
        "id": 4166,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369370700000
    },
    {
        "id": 4142,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369371600000
    },
    {
        "id": 4160,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369372500000
    },
    {
        "id": 4163,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369373400000
    },
    {
        "id": 4169,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369374300000
    },
    {
        "id": 4190,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369375200000
    },
    {
        "id": 4193,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369376100000
    },
    {
        "id": 4175,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369377000000
    },
    {
        "id": 4199,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369377900000
    },
    {
        "id": 4202,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369378800000
    },
    {
        "id": 4205,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369379700000
    },
    {
        "id": 4217,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369380600000
    },
    {
        "id": 1484,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369381500000
    },
    {
        "id": 4211,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369382400000
    },
    {
        "id": 4172,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369383300000
    },
    {
        "id": 4178,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369384200000
    },
    {
        "id": 4181,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369385100000
    },
    {
        "id": 4184,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369386000000
    },
    {
        "id": 4220,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369386900000
    },
    {
        "id": 4223,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369387800000
    },
    {
        "id": 4187,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369388700000
    },
    {
        "id": 4232,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369389600000
    },
    {
        "id": 4229,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369390500000
    },
    {
        "id": 4226,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369391400000
    },
    {
        "id": 7517,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369392300000
    },
    {
        "id": 1490,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369393200000
    },
    {
        "id": 4235,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369394100000
    },
    {
        "id": 4238,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369395000000
    },
    {
        "id": 4241,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369395900000
    },
    {
        "id": 4196,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369396800000
    },
    {
        "id": 4244,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369397700000
    },
    {
        "id": 4253,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369398600000
    },
    {
        "id": 4208,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369399500000
    },
    {
        "id": 4250,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369400400000
    },
    {
        "id": 4247,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369401300000
    },
    {
        "id": 4214,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369402200000
    },
    {
        "id": 4256,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369403100000
    },
    {
        "id": 4259,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369404000000
    },
    {
        "id": 1505,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369404900000
    },
    {
        "id": 4271,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369405800000
    },
    {
        "id": 4262,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369406700000
    },
    {
        "id": 7589,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369407600000
    },
    {
        "id": 4265,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369408500000
    },
    {
        "id": 4268,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369409400000
    },
    {
        "id": 4274,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369410300000
    },
    {
        "id": 4280,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369411200000
    },
    {
        "id": 4292,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369412100000
    },
    {
        "id": 1514,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369413000000
    },
    {
        "id": 4277,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369413900000
    },
    {
        "id": 4286,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369414800000
    },
    {
        "id": 4283,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369415700000
    },
    {
        "id": 4310,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369416600000
    },
    {
        "id": 1520,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369417500000
    },
    {
        "id": 4301,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369418400000
    },
    {
        "id": 4289,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369419300000
    },
    {
        "id": 4304,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369420200000
    },
    {
        "id": 4316,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369421100000
    },
    {
        "id": 4307,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369422000000
    },
    {
        "id": 4313,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369422900000
    },
    {
        "id": 1508,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369423800000
    },
    {
        "id": 4295,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369424700000
    },
    {
        "id": 4322,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369425600000
    },
    {
        "id": 4298,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369426500000
    },
    {
        "id": 4319,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369427400000
    },
    {
        "id": 4325,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369428300000
    },
    {
        "id": 4328,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369429200000
    },
    {
        "id": 4331,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369430100000
    },
    {
        "id": 4346,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369431000000
    },
    {
        "id": 4334,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369431900000
    },
    {
        "id": 4349,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369432800000
    },
    {
        "id": 4352,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369433700000
    },
    {
        "id": 4364,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369434600000
    },
    {
        "id": 4367,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369435500000
    },
    {
        "id": 4355,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369436400000
    },
    {
        "id": 4358,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369437300000
    },
    {
        "id": 4361,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369438200000
    },
    {
        "id": 4370,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369439100000
    },
    {
        "id": 4373,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369440000000
    },
    {
        "id": 4340,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369440900000
    },
    {
        "id": 4376,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369441800000
    },
    {
        "id": 4379,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369442700000
    },
    {
        "id": 4385,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369443600000
    },
    {
        "id": 4337,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369444500000
    },
    {
        "id": 4343,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369445400000
    },
    {
        "id": 2438,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2732",
        "reactivePower": "2732",
        "timeInstant": 1369446300000
    },
    {
        "id": 4388,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369447200000
    },
    {
        "id": 1526,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369448100000
    },
    {
        "id": 4391,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369449000000
    },
    {
        "id": 2402,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2747",
        "reactivePower": "2747",
        "timeInstant": 1369449900000
    },
    {
        "id": 4397,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369450800000
    },
    {
        "id": 4403,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369451700000
    },
    {
        "id": 2393,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2762",
        "reactivePower": "2762",
        "timeInstant": 1369452600000
    },
    {
        "id": 4406,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369453500000
    },
    {
        "id": 4412,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369454400000
    },
    {
        "id": 4400,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369455300000
    },
    {
        "id": 4415,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369456200000
    },
    {
        "id": 4442,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369457100000
    },
    {
        "id": 4424,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369458000000
    },
    {
        "id": 4421,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369458900000
    },
    {
        "id": 4418,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369459800000
    },
    {
        "id": 4436,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369460700000
    },
    {
        "id": 4427,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369461600000
    },
    {
        "id": 2408,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369462500000
    },
    {
        "id": 4451,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369463400000
    },
    {
        "id": 2417,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369464300000
    },
    {
        "id": 4454,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369465200000
    },
    {
        "id": 2414,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369466100000
    },
    {
        "id": 4448,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369467000000
    },
    {
        "id": 1544,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369467900000
    },
    {
        "id": 4439,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369468800000
    },
    {
        "id": 4463,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369469700000
    },
    {
        "id": 4466,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369470600000
    },
    {
        "id": 4469,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369471500000
    },
    {
        "id": 4460,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369472400000
    },
    {
        "id": 1556,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369473300000
    },
    {
        "id": 4490,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369474200000
    },
    {
        "id": 4499,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369475100000
    },
    {
        "id": 1550,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369476000000
    },
    {
        "id": 1553,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369476900000
    },
    {
        "id": 4457,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369477800000
    },
    {
        "id": 4484,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369478700000
    },
    {
        "id": 4502,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369479600000
    },
    {
        "id": 4493,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369480500000
    },
    {
        "id": 4505,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369481400000
    },
    {
        "id": 4481,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369482300000
    },
    {
        "id": 1592,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369483200000
    },
    {
        "id": 4472,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369484100000
    },
    {
        "id": 4478,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369485000000
    },
    {
        "id": 2429,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369485900000
    },
    {
        "id": 7778,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369486800000
    },
    {
        "id": 4496,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369487700000
    },
    {
        "id": 2435,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369488600000
    },
    {
        "id": 4514,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369489500000
    },
    {
        "id": 4508,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369490400000
    },
    {
        "id": 4511,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369491300000
    },
    {
        "id": 4517,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369492200000
    },
    {
        "id": 1538,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369493100000
    },
    {
        "id": 4529,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369494000000
    },
    {
        "id": 4532,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369494900000
    },
    {
        "id": 4520,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369495800000
    },
    {
        "id": 4535,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369496700000
    },
    {
        "id": 4523,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369497600000
    },
    {
        "id": 4538,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369498500000
    },
    {
        "id": 1562,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369499400000
    },
    {
        "id": 4541,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369500300000
    },
    {
        "id": 4526,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369501200000
    },
    {
        "id": 4544,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369502100000
    },
    {
        "id": 4547,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369503000000
    },
    {
        "id": 4550,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369503900000
    },
    {
        "id": 4562,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369504800000
    },
    {
        "id": 4565,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369505700000
    },
    {
        "id": 4553,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369506600000
    },
    {
        "id": 4556,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369507500000
    },
    {
        "id": 4595,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369508400000
    },
    {
        "id": 4580,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369509300000
    },
    {
        "id": 4559,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369510200000
    },
    {
        "id": 4568,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369511100000
    },
    {
        "id": 4577,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369512000000
    },
    {
        "id": 4571,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369512900000
    },
    {
        "id": 4583,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369513800000
    },
    {
        "id": 4586,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369514700000
    },
    {
        "id": 4592,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369515600000
    },
    {
        "id": 4604,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369516500000
    },
    {
        "id": 4622,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369517400000
    },
    {
        "id": 4601,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369518300000
    },
    {
        "id": 1571,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369519200000
    },
    {
        "id": 4574,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369520100000
    },
    {
        "id": 4619,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369521000000
    },
    {
        "id": 1580,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369521900000
    },
    {
        "id": 2444,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2627",
        "reactivePower": "2627",
        "timeInstant": 1369522800000
    },
    {
        "id": 2456,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2611",
        "reactivePower": "2611",
        "timeInstant": 1369523700000
    },
    {
        "id": 2423,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2583",
        "reactivePower": "2583",
        "timeInstant": 1369524600000
    },
    {
        "id": 4625,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369525500000
    },
    {
        "id": 4634,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369526400000
    },
    {
        "id": 4640,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369527300000
    },
    {
        "id": 4643,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369528200000
    },
    {
        "id": 4652,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369529100000
    },
    {
        "id": 4646,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369530000000
    },
    {
        "id": 4589,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369530900000
    },
    {
        "id": 4616,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369531800000
    },
    {
        "id": 4598,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369532700000
    },
    {
        "id": 4649,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369533600000
    },
    {
        "id": 4607,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369534500000
    },
    {
        "id": 1568,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369535400000
    },
    {
        "id": 4610,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369536300000
    },
    {
        "id": 4655,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369537200000
    },
    {
        "id": 4613,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369538100000
    },
    {
        "id": 1589,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369539000000
    },
    {
        "id": 4658,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369539900000
    },
    {
        "id": 4664,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369540800000
    },
    {
        "id": 4661,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369541700000
    },
    {
        "id": 4667,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369542600000
    },
    {
        "id": 4670,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369543500000
    },
    {
        "id": 4673,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369544400000
    },
    {
        "id": 4682,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369545300000
    },
    {
        "id": 4676,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369546200000
    },
    {
        "id": 4685,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369547100000
    },
    {
        "id": 4691,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369548000000
    },
    {
        "id": 4679,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369548900000
    },
    {
        "id": 4697,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369549800000
    },
    {
        "id": 4709,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369550700000
    },
    {
        "id": 4715,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369551600000
    },
    {
        "id": 4718,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369552500000
    },
    {
        "id": 4700,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369553400000
    },
    {
        "id": 4703,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369554300000
    },
    {
        "id": 4688,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369555200000
    },
    {
        "id": 4721,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369556100000
    },
    {
        "id": 2468,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369557000000
    },
    {
        "id": 4724,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369557900000
    },
    {
        "id": 4706,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369558800000
    },
    {
        "id": 4748,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369559700000
    },
    {
        "id": 4727,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369560600000
    },
    {
        "id": 4742,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369561500000
    },
    {
        "id": 4712,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369562400000
    },
    {
        "id": 4745,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369563300000
    },
    {
        "id": 4754,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369564200000
    },
    {
        "id": 4760,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369565100000
    },
    {
        "id": 4730,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369566000000
    },
    {
        "id": 2447,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369566900000
    },
    {
        "id": 4739,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369567800000
    },
    {
        "id": 4766,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369568700000
    },
    {
        "id": 2453,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369569600000
    },
    {
        "id": 4769,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369570500000
    },
    {
        "id": 4772,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369571400000
    },
    {
        "id": 2465,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369572300000
    },
    {
        "id": 4778,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369573200000
    },
    {
        "id": 2471,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369574100000
    },
    {
        "id": 2462,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369575000000
    },
    {
        "id": 4757,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369575900000
    },
    {
        "id": 4733,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369576800000
    },
    {
        "id": 4751,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369577700000
    },
    {
        "id": 2480,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369578600000
    },
    {
        "id": 4736,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369579500000
    },
    {
        "id": 2474,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369580400000
    },
    {
        "id": 4793,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369581300000
    },
    {
        "id": 4775,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369582200000
    },
    {
        "id": 4796,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369583100000
    },
    {
        "id": 4805,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369584000000
    },
    {
        "id": 2489,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369584900000
    },
    {
        "id": 4811,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369585800000
    },
    {
        "id": 2477,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369586700000
    },
    {
        "id": 4829,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369587600000
    },
    {
        "id": 4823,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369588500000
    },
    {
        "id": 4850,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369589400000
    },
    {
        "id": 4820,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369590300000
    },
    {
        "id": 2498,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369591200000
    },
    {
        "id": 2501,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369592100000
    },
    {
        "id": 4826,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369593000000
    },
    {
        "id": 4835,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369593900000
    },
    {
        "id": 4832,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369594800000
    },
    {
        "id": 1610,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369595700000
    },
    {
        "id": 2492,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1892",
        "reactivePower": "1892",
        "timeInstant": 1369596600000
    },
    {
        "id": 4841,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369597500000
    },
    {
        "id": 4883,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369598400000
    },
    {
        "id": 1616,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369599300000
    },
    {
        "id": 4856,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369600200000
    },
    {
        "id": 4859,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369601100000
    },
    {
        "id": 4862,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369602000000
    },
    {
        "id": 4868,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369602900000
    },
    {
        "id": 2495,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2644",
        "reactivePower": "2644",
        "timeInstant": 1369603800000
    },
    {
        "id": 1622,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369604700000
    },
    {
        "id": 4847,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369605600000
    },
    {
        "id": 4871,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369606500000
    },
    {
        "id": 4886,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369607400000
    },
    {
        "id": 4889,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369608300000
    },
    {
        "id": 4892,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369609200000
    },
    {
        "id": 4898,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369610100000
    },
    {
        "id": 1649,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369611000000
    },
    {
        "id": 4865,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369611900000
    },
    {
        "id": 1628,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369612800000
    },
    {
        "id": 1640,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369613700000
    },
    {
        "id": 1634,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369614600000
    },
    {
        "id": 4901,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369615500000
    },
    {
        "id": 4895,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369616400000
    },
    {
        "id": 4913,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369617300000
    },
    {
        "id": 4907,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369618200000
    },
    {
        "id": 1658,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369619100000
    },
    {
        "id": 4874,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369620000000
    },
    {
        "id": 4877,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369620900000
    },
    {
        "id": 4904,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369621800000
    },
    {
        "id": 4910,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369622700000
    },
    {
        "id": 4916,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369623600000
    },
    {
        "id": 4880,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369624500000
    },
    {
        "id": 4919,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369625400000
    },
    {
        "id": 4922,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369626300000
    },
    {
        "id": 4925,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369627200000
    },
    {
        "id": 1667,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369628100000
    },
    {
        "id": 4928,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369629000000
    },
    {
        "id": 4931,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369629900000
    },
    {
        "id": 4934,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369630800000
    },
    {
        "id": 4937,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369631700000
    },
    {
        "id": 4940,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369632600000
    },
    {
        "id": 4967,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369633500000
    },
    {
        "id": 4964,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369634400000
    },
    {
        "id": 4970,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369635300000
    },
    {
        "id": 4952,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369636200000
    },
    {
        "id": 4943,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369637100000
    },
    {
        "id": 4946,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369638000000
    },
    {
        "id": 4949,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369638900000
    },
    {
        "id": 4958,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369639800000
    },
    {
        "id": 4976,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369640700000
    },
    {
        "id": 4988,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369641600000
    },
    {
        "id": 4955,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369642500000
    },
    {
        "id": 4961,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369643400000
    },
    {
        "id": 4973,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369644300000
    },
    {
        "id": 4979,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369645200000
    },
    {
        "id": 1700,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369646100000
    },
    {
        "id": 1673,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369647000000
    },
    {
        "id": 4994,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369647900000
    },
    {
        "id": 1694,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369648800000
    },
    {
        "id": 1655,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369649700000
    },
    {
        "id": 4985,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369650600000
    },
    {
        "id": 1646,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369651500000
    },
    {
        "id": 1664,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369652400000
    },
    {
        "id": 1685,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369653300000
    },
    {
        "id": 2507,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369654200000
    },
    {
        "id": 4997,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369655100000
    },
    {
        "id": 5012,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369656000000
    },
    {
        "id": 5009,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369656900000
    },
    {
        "id": 5018,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369657800000
    },
    {
        "id": 5006,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369658700000
    },
    {
        "id": 5003,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369659600000
    },
    {
        "id": 5015,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369660500000
    },
    {
        "id": 4982,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369661400000
    },
    {
        "id": 2513,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "2",
        "reactivePower": "2",
        "timeInstant": 1369662300000
    },
    {
        "id": 2525,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369663200000
    },
    {
        "id": 5039,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369664100000
    },
    {
        "id": 1679,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369665000000
    },
    {
        "id": 2534,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369665900000
    },
    {
        "id": 5036,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369666800000
    },
    {
        "id": 5033,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369667700000
    },
    {
        "id": 5000,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369668600000
    },
    {
        "id": 5027,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369669500000
    },
    {
        "id": 5042,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369670400000
    },
    {
        "id": 5045,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369671300000
    },
    {
        "id": 5048,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369672200000
    },
    {
        "id": 5051,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369673100000
    },
    {
        "id": 5054,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369674000000
    },
    {
        "id": 5057,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369674900000
    },
    {
        "id": 5060,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369675800000
    },
    {
        "id": 5066,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369676700000
    },
    {
        "id": 5069,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369677600000
    },
    {
        "id": 5063,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369678500000
    },
    {
        "id": 5078,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369679400000
    },
    {
        "id": 5081,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369680300000
    },
    {
        "id": 5084,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369681200000
    },
    {
        "id": 5072,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369682100000
    },
    {
        "id": 5075,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369683000000
    },
    {
        "id": 5087,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369683900000
    },
    {
        "id": 5105,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369684800000
    },
    {
        "id": 5117,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369685700000
    },
    {
        "id": 5099,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369686600000
    },
    {
        "id": 5096,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369687500000
    },
    {
        "id": 5108,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369688400000
    },
    {
        "id": 5132,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369689300000
    },
    {
        "id": 5093,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369690200000
    },
    {
        "id": 5114,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "1",
        "reactivePower": "1",
        "timeInstant": 1369691100000
    },
    {
        "id": 721,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "234",
        "reactivePower": "234",
        "timeInstant": 1369738393000
    },
    {
        "id": 728,
        "ammsId": "OUTSMART.AMMS_06E1E5B2100009549",
        "activePower": "40",
        "reactivePower": "40",
        "timeInstant": 1369995220000
    }
];


var exampleRGdata = [
    {
        "id": 368,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "2328",
        "reactivePower": "1322",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1364782500000
    },
    {
        "id": 18,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369205133000
    },
    {
        "id": 39,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369252834000
    },
    {
        "id": 40,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369253734000
    },
    {
        "id": 41,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369254634000
    },
    {
        "id": 42,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369255534000
    },
    {
        "id": 43,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369256433000
    },
    {
        "id": 44,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369257334000
    },
    {
        "id": 45,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369259134000
    },
    {
        "id": 46,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10601",
        "reactivePower": "5914",
        "electricPotential": "229",
        "electricCurrent": "17235",
        "timeInstant": 1369260034000
    },
    {
        "id": 47,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10535",
        "reactivePower": "6343",
        "electricPotential": "232",
        "electricCurrent": "17667",
        "timeInstant": 1369260935000
    },
    {
        "id": 48,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10493",
        "reactivePower": "6027",
        "electricPotential": "231",
        "electricCurrent": "17441",
        "timeInstant": 1369261834000
    },
    {
        "id": 49,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "6076",
        "electricPotential": "230",
        "electricCurrent": "17441",
        "timeInstant": 1369262734000
    },
    {
        "id": 50,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "6173",
        "electricPotential": "229",
        "electricCurrent": "17425",
        "timeInstant": 1369263633000
    },
    {
        "id": 51,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10426",
        "reactivePower": "6173",
        "electricPotential": "230",
        "electricCurrent": "17494",
        "timeInstant": 1369264534000
    },
    {
        "id": 52,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10666",
        "reactivePower": "6222",
        "electricPotential": "229",
        "electricCurrent": "17510",
        "timeInstant": 1369265434000
    },
    {
        "id": 53,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10175",
        "reactivePower": "6115",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1369266334000
    },
    {
        "id": 54,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10601",
        "reactivePower": "6078",
        "electricPotential": "230",
        "electricCurrent": "17100",
        "timeInstant": 1369267233000
    },
    {
        "id": 55,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10601",
        "reactivePower": "6174",
        "electricPotential": "232",
        "electricCurrent": "17597",
        "timeInstant": 1369268133000
    },
    {
        "id": 56,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10341",
        "reactivePower": "6174",
        "electricPotential": "230",
        "electricCurrent": "17355",
        "timeInstant": 1369269033000
    },
    {
        "id": 57,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10313",
        "reactivePower": "6028",
        "electricPotential": "229",
        "electricCurrent": "17319",
        "timeInstant": 1369269934000
    },
    {
        "id": 58,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10431",
        "reactivePower": "6193",
        "electricPotential": "232",
        "electricCurrent": "17254",
        "timeInstant": 1369270834000
    },
    {
        "id": 59,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10250",
        "reactivePower": "6329",
        "electricPotential": "231",
        "electricCurrent": "17491",
        "timeInstant": 1369271734000
    },
    {
        "id": 60,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10250",
        "reactivePower": "6227",
        "electricPotential": "229",
        "electricCurrent": "17215",
        "timeInstant": 1369272633000
    },
    {
        "id": 61,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10378",
        "reactivePower": "6227",
        "electricPotential": "231",
        "electricCurrent": "17406",
        "timeInstant": 1369273534000
    },
    {
        "id": 62,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10280",
        "reactivePower": "6221",
        "electricPotential": "231",
        "electricCurrent": "17389",
        "timeInstant": 1369274433000
    },
    {
        "id": 63,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10382",
        "reactivePower": "6149",
        "electricPotential": "230",
        "electricCurrent": "17251",
        "timeInstant": 1369275335000
    },
    {
        "id": 64,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10372",
        "reactivePower": "6312",
        "electricPotential": "231",
        "electricCurrent": "17440",
        "timeInstant": 1369276234000
    },
    {
        "id": 65,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10527",
        "reactivePower": "6318",
        "electricPotential": "231",
        "electricCurrent": "17441",
        "timeInstant": 1369277134000
    },
    {
        "id": 66,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10540",
        "reactivePower": "6481",
        "electricPotential": "232",
        "electricCurrent": "17613",
        "timeInstant": 1369278033000
    },
    {
        "id": 67,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10545",
        "reactivePower": "6493",
        "electricPotential": "233",
        "electricCurrent": "17648",
        "timeInstant": 1369278934000
    },
    {
        "id": 68,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10545",
        "reactivePower": "6517",
        "electricPotential": "232",
        "electricCurrent": "17716",
        "timeInstant": 1369279833000
    },
    {
        "id": 69,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10629",
        "reactivePower": "6499",
        "electricPotential": "233",
        "electricCurrent": "17681",
        "timeInstant": 1369280734000
    },
    {
        "id": 70,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10425",
        "reactivePower": "6463",
        "electricPotential": "233",
        "electricCurrent": "17682",
        "timeInstant": 1369281633000
    },
    {
        "id": 71,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6265",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1369282534000
    },
    {
        "id": 72,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10516",
        "reactivePower": "6396",
        "electricPotential": "232",
        "electricCurrent": "17579",
        "timeInstant": 1369283434000
    },
    {
        "id": 73,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10353",
        "reactivePower": "6452",
        "electricPotential": "232",
        "electricCurrent": "17545",
        "timeInstant": 1369285233000
    },
    {
        "id": 74,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10529",
        "reactivePower": "6282",
        "electricPotential": "231",
        "electricCurrent": "17372",
        "timeInstant": 1369286133000
    },
    {
        "id": 75,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10473",
        "reactivePower": "6200",
        "electricPotential": "233",
        "electricCurrent": "17358",
        "timeInstant": 1369287033000
    },
    {
        "id": 76,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10341",
        "reactivePower": "6440",
        "electricPotential": "232",
        "electricCurrent": "17527",
        "timeInstant": 1369287934000
    },
    {
        "id": 77,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10546",
        "reactivePower": "6276",
        "electricPotential": "231",
        "electricCurrent": "17372",
        "timeInstant": 1369288833000
    },
    {
        "id": 78,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6145",
        "electricPotential": "233",
        "electricCurrent": "17390",
        "timeInstant": 1369289735000
    },
    {
        "id": 79,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6127",
        "electricPotential": "232",
        "electricCurrent": "17441",
        "timeInstant": 1369290633000
    },
    {
        "id": 80,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369291534000
    },
    {
        "id": 368,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "2328",
        "reactivePower": "1322",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1364782500000
    },
    {
        "id": 18,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369205133000
    },
    {
        "id": 39,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369252834000
    },
    {
        "id": 40,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369253734000
    },
    {
        "id": 41,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369254634000
    },
    {
        "id": 42,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369255534000
    },
    {
        "id": 43,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369256433000
    },
    {
        "id": 44,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369257334000
    },
    {
        "id": 45,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369259134000
    },
    {
        "id": 46,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10601",
        "reactivePower": "5914",
        "electricPotential": "229",
        "electricCurrent": "17235",
        "timeInstant": 1369260034000
    },
    {
        "id": 47,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10535",
        "reactivePower": "6343",
        "electricPotential": "232",
        "electricCurrent": "17667",
        "timeInstant": 1369260935000
    },
    {
        "id": 48,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10493",
        "reactivePower": "6027",
        "electricPotential": "231",
        "electricCurrent": "17441",
        "timeInstant": 1369261834000
    },
    {
        "id": 49,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "6076",
        "electricPotential": "230",
        "electricCurrent": "17441",
        "timeInstant": 1369262734000
    },
    {
        "id": 50,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "6173",
        "electricPotential": "229",
        "electricCurrent": "17425",
        "timeInstant": 1369263633000
    },
    {
        "id": 51,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10426",
        "reactivePower": "6173",
        "electricPotential": "230",
        "electricCurrent": "17494",
        "timeInstant": 1369264534000
    },
    {
        "id": 52,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10666",
        "reactivePower": "6222",
        "electricPotential": "229",
        "electricCurrent": "17510",
        "timeInstant": 1369265434000
    },
    {
        "id": 53,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10175",
        "reactivePower": "6115",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1369266334000
    },
    {
        "id": 54,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10601",
        "reactivePower": "6078",
        "electricPotential": "230",
        "electricCurrent": "17100",
        "timeInstant": 1369267233000
    },
    {
        "id": 55,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10601",
        "reactivePower": "6174",
        "electricPotential": "232",
        "electricCurrent": "17597",
        "timeInstant": 1369268133000
    },
    {
        "id": 56,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10341",
        "reactivePower": "6174",
        "electricPotential": "230",
        "electricCurrent": "17355",
        "timeInstant": 1369269033000
    },
    {
        "id": 57,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10313",
        "reactivePower": "6028",
        "electricPotential": "229",
        "electricCurrent": "17319",
        "timeInstant": 1369269934000
    },
    {
        "id": 58,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10431",
        "reactivePower": "6193",
        "electricPotential": "232",
        "electricCurrent": "17254",
        "timeInstant": 1369270834000
    },
    {
        "id": 59,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10250",
        "reactivePower": "6329",
        "electricPotential": "231",
        "electricCurrent": "17491",
        "timeInstant": 1369271734000
    },
    {
        "id": 60,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10250",
        "reactivePower": "6227",
        "electricPotential": "229",
        "electricCurrent": "17215",
        "timeInstant": 1369272633000
    },
    {
        "id": 61,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10378",
        "reactivePower": "6227",
        "electricPotential": "231",
        "electricCurrent": "17406",
        "timeInstant": 1369273534000
    },
    {
        "id": 62,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10280",
        "reactivePower": "6221",
        "electricPotential": "231",
        "electricCurrent": "17389",
        "timeInstant": 1369274433000
    },
    {
        "id": 63,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10382",
        "reactivePower": "6149",
        "electricPotential": "230",
        "electricCurrent": "17251",
        "timeInstant": 1369275335000
    },
    {
        "id": 64,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10372",
        "reactivePower": "6312",
        "electricPotential": "231",
        "electricCurrent": "17440",
        "timeInstant": 1369276234000
    },
    {
        "id": 65,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10527",
        "reactivePower": "6318",
        "electricPotential": "231",
        "electricCurrent": "17441",
        "timeInstant": 1369277134000
    },
    {
        "id": 66,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10540",
        "reactivePower": "6481",
        "electricPotential": "232",
        "electricCurrent": "17613",
        "timeInstant": 1369278033000
    },
    {
        "id": 67,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10545",
        "reactivePower": "6493",
        "electricPotential": "233",
        "electricCurrent": "17648",
        "timeInstant": 1369278934000
    },
    {
        "id": 68,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10545",
        "reactivePower": "6517",
        "electricPotential": "232",
        "electricCurrent": "17716",
        "timeInstant": 1369279833000
    },
    {
        "id": 69,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10629",
        "reactivePower": "6499",
        "electricPotential": "233",
        "electricCurrent": "17681",
        "timeInstant": 1369280734000
    },
    {
        "id": 70,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10425",
        "reactivePower": "6463",
        "electricPotential": "233",
        "electricCurrent": "17682",
        "timeInstant": 1369281633000
    },
    {
        "id": 71,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6265",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1369282534000
    },
    {
        "id": 72,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10516",
        "reactivePower": "6396",
        "electricPotential": "232",
        "electricCurrent": "17579",
        "timeInstant": 1369283434000
    },
    {
        "id": 73,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10353",
        "reactivePower": "6452",
        "electricPotential": "232",
        "electricCurrent": "17545",
        "timeInstant": 1369285233000
    },
    {
        "id": 74,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10529",
        "reactivePower": "6282",
        "electricPotential": "231",
        "electricCurrent": "17372",
        "timeInstant": 1369286133000
    },
    {
        "id": 75,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10473",
        "reactivePower": "6200",
        "electricPotential": "233",
        "electricCurrent": "17358",
        "timeInstant": 1369287033000
    },
    {
        "id": 76,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10341",
        "reactivePower": "6440",
        "electricPotential": "232",
        "electricCurrent": "17527",
        "timeInstant": 1369287934000
    },
    {
        "id": 77,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10546",
        "reactivePower": "6276",
        "electricPotential": "231",
        "electricCurrent": "17372",
        "timeInstant": 1369288833000
    },
    {
        "id": 78,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6145",
        "electricPotential": "233",
        "electricCurrent": "17390",
        "timeInstant": 1369289735000
    },
    {
        "id": 79,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6127",
        "electricPotential": "232",
        "electricCurrent": "17441",
        "timeInstant": 1369290633000
    },
    {
        "id": 80,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369291534000
    },
    {
        "id": 87,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369339234000
    },
    {
        "id": 88,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369340134000
    },
    {
        "id": 89,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369341033000
    },
    {
        "id": 90,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369341934000
    },
    {
        "id": 91,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369342834000
    },
    {
        "id": 92,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369343733000
    },
    {
        "id": 93,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369344634000
    },
    {
        "id": 94,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10240",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369345533000
    },
    {
        "id": 95,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10414",
        "reactivePower": "6115",
        "electricPotential": "228",
        "electricCurrent": "17304",
        "timeInstant": 1369346434000
    },
    {
        "id": 96,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "5758",
        "electricPotential": "229",
        "electricCurrent": "17253",
        "timeInstant": 1369347334000
    },
    {
        "id": 97,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10475",
        "reactivePower": "5831",
        "electricPotential": "229",
        "electricCurrent": "17217",
        "timeInstant": 1369348233000
    },
    {
        "id": 98,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10360",
        "reactivePower": "6191",
        "electricPotential": "231",
        "electricCurrent": "17528",
        "timeInstant": 1369349134000
    },
    {
        "id": 99,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10792",
        "reactivePower": "6137",
        "electricPotential": "230",
        "electricCurrent": "17407",
        "timeInstant": 1369350034000
    },
    {
        "id": 100,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "6457",
        "electricPotential": "233",
        "electricCurrent": "17872",
        "timeInstant": 1369135000
    },
    {
        "id": 101,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10793",
        "reactivePower": "6360",
        "electricPotential": "233",
        "electricCurrent": "17821",
        "timeInstant": 1369351834000
    },
    {
        "id": 102,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10594",
        "reactivePower": "6463",
        "electricPotential": "233",
        "electricCurrent": "17924",
        "timeInstant": 1369352734000
    },
    {
        "id": 103,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10864",
        "reactivePower": "6463",
        "electricPotential": "233",
        "electricCurrent": "17700",
        "timeInstant": 1369353633000
    },
    {
        "id": 104,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10750",
        "reactivePower": "6427",
        "electricPotential": "234",
        "electricCurrent": "17872",
        "timeInstant": 1369354534000
    },
    {
        "id": 105,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10750",
        "reactivePower": "6337",
        "electricPotential": "234",
        "electricCurrent": "17925",
        "timeInstant": 1369355433000
    },
    {
        "id": 106,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10625",
        "reactivePower": "6337",
        "electricPotential": "232",
        "electricCurrent": "17614",
        "timeInstant": 1369356333000
    },
    {
        "id": 107,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10625",
        "reactivePower": "6342",
        "electricPotential": "233",
        "electricCurrent": "17597",
        "timeInstant": 1369357233000
    },
    {
        "id": 108,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10763",
        "reactivePower": "6505",
        "electricPotential": "233",
        "electricCurrent": "17769",
        "timeInstant": 1369358134000
    },
    {
        "id": 109,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10750",
        "reactivePower": "6724",
        "electricPotential": "234",
        "electricCurrent": "17925",
        "timeInstant": 1369359033000
    },
    {
        "id": 110,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10732",
        "reactivePower": "6603",
        "electricPotential": "234",
        "electricCurrent": "17856",
        "timeInstant": 1369359934000
    },
    {
        "id": 111,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10733",
        "reactivePower": "6500",
        "electricPotential": "234",
        "electricCurrent": "17752",
        "timeInstant": 1369360833000
    },
    {
        "id": 112,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10582",
        "reactivePower": "6429",
        "electricPotential": "233",
        "electricCurrent": "17787",
        "timeInstant": 1369361734000
    },
    {
        "id": 113,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10582",
        "reactivePower": "6609",
        "electricPotential": "233",
        "electricCurrent": "17614",
        "timeInstant": 1369362636000
    },
    {
        "id": 114,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10720",
        "reactivePower": "6609",
        "electricPotential": "235",
        "electricCurrent": "17786",
        "timeInstant": 1369363534000
    },
    {
        "id": 115,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10797",
        "reactivePower": "6590",
        "electricPotential": "235",
        "electricCurrent": "17735",
        "timeInstant": 1369364432000
    },
    {
        "id": 116,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10600",
        "reactivePower": "6566",
        "electricPotential": "235",
        "electricCurrent": "17821",
        "timeInstant": 1369365334000
    },
    {
        "id": 117,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10593",
        "reactivePower": "6536",
        "electricPotential": "233",
        "electricCurrent": "17701",
        "timeInstant": 1369366234000
    },
    {
        "id": 118,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10720",
        "reactivePower": "6378",
        "electricPotential": "233",
        "electricCurrent": "17647",
        "timeInstant": 1369367134000
    },
    {
        "id": 119,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10702",
        "reactivePower": "6411",
        "electricPotential": "234",
        "electricCurrent": "17700",
        "timeInstant": 1369368033000
    },
    {
        "id": 120,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10593",
        "reactivePower": "6481",
        "electricPotential": "234",
        "electricCurrent": "17700",
        "timeInstant": 1369368933000
    },
    {
        "id": 121,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10552",
        "reactivePower": "6289",
        "electricPotential": "234",
        "electricCurrent": "17562",
        "timeInstant": 1369369833000
    },
    {
        "id": 122,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10738",
        "reactivePower": "6224",
        "electricPotential": "232",
        "electricCurrent": "17442",
        "timeInstant": 1369371634000
    },
    {
        "id": 123,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10852",
        "reactivePower": "6423",
        "electricPotential": "234",
        "electricCurrent": "17683",
        "timeInstant": 1369372533000
    },
    {
        "id": 124,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10625",
        "reactivePower": "6512",
        "electricPotential": "236",
        "electricCurrent": "17821",
        "timeInstant": 1369373433000
    },
    {
        "id": 125,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10681",
        "reactivePower": "6111",
        "electricPotential": "234",
        "electricCurrent": "17445",
        "timeInstant": 1369374333000
    },
    {
        "id": 126,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10484",
        "reactivePower": "6318",
        "electricPotential": "234",
        "electricCurrent": "17629",
        "timeInstant": 1369375233000
    },
    {
        "id": 127,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10714",
        "reactivePower": "6026",
        "electricPotential": "232",
        "electricCurrent": "17305",
        "timeInstant": 1369376133000
    },
    {
        "id": 128,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6149",
        "electricPotential": "234",
        "electricCurrent": "17528",
        "timeInstant": 1369377034000
    },
    {
        "id": 129,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369377933000
    },
    {
        "id": 130,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "",
        "electricPotential": "",
        "electricCurrent": "",
        "timeInstant": 1369425633000
    },
    {
        "id": 131,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369426534000
    },
    {
        "id": 132,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369427433000
    },
    {
        "id": 133,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369428334000
    },
    {
        "id": 134,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369429233000
    },
    {
        "id": 135,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369430133000
    },
    {
        "id": 136,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369431033000
    },
    {
        "id": 137,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10203",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369431934000
    },
    {
        "id": 138,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10529",
        "reactivePower": "5584",
        "electricPotential": "227",
        "electricCurrent": "17062",
        "timeInstant": 1369432834000
    },
    {
        "id": 139,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10576",
        "reactivePower": "6112",
        "electricPotential": "231",
        "electricCurrent": "17459",
        "timeInstant": 1369433734000
    },
    {
        "id": 140,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10409",
        "reactivePower": "6144",
        "electricPotential": "231",
        "electricCurrent": "17545",
        "timeInstant": 1369434634000
    },
    {
        "id": 141,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10229",
        "reactivePower": "6131",
        "electricPotential": "230",
        "electricCurrent": "17425",
        "timeInstant": 1369435533000
    },
    {
        "id": 142,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10414",
        "reactivePower": "6040",
        "electricPotential": "229",
        "electricCurrent": "17235",
        "timeInstant": 1369436433000
    },
    {
        "id": 143,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10451",
        "reactivePower": "6143",
        "electricPotential": "230",
        "electricCurrent": "17458",
        "timeInstant": 1369437334000
    },
    {
        "id": 144,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10312",
        "reactivePower": "6179",
        "electricPotential": "230",
        "electricCurrent": "17511",
        "timeInstant": 1369438234000
    },
    {
        "id": 145,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10468",
        "reactivePower": "5993",
        "electricPotential": "228",
        "electricCurrent": "17338",
        "timeInstant": 1369439134000
    },
    {
        "id": 146,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10354",
        "reactivePower": "6192",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1369440034000
    },
    {
        "id": 147,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10234",
        "reactivePower": "6100",
        "electricPotential": "230",
        "electricCurrent": "17286",
        "timeInstant": 1369440934000
    },
    {
        "id": 148,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10300",
        "reactivePower": "5868",
        "electricPotential": "228",
        "electricCurrent": "17149",
        "timeInstant": 1369441834000
    },
    {
        "id": 149,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10234",
        "reactivePower": "6089",
        "electricPotential": "229",
        "electricCurrent": "17320",
        "timeInstant": 1369442733000
    },
    {
        "id": 150,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10456",
        "reactivePower": "5957",
        "electricPotential": "229",
        "electricCurrent": "17183",
        "timeInstant": 1369443633000
    },
    {
        "id": 151,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10060",
        "reactivePower": "5999",
        "electricPotential": "230",
        "electricCurrent": "17424",
        "timeInstant": 1369444533000
    },
    {
        "id": 152,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "9971",
        "reactivePower": "5945",
        "electricPotential": "227",
        "electricCurrent": "17027",
        "timeInstant": 1369445434000
    },
    {
        "id": 153,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "9971",
        "reactivePower": "5999",
        "electricPotential": "228",
        "electricCurrent": "16721",
        "timeInstant": 1369446333000
    },
    {
        "id": 154,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10204",
        "reactivePower": "5999",
        "electricPotential": "230",
        "electricCurrent": "17217",
        "timeInstant": 1369447233000
    },
    {
        "id": 155,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10167",
        "reactivePower": "5839",
        "electricPotential": "230",
        "electricCurrent": "16979",
        "timeInstant": 1369448133000
    },
    {
        "id": 156,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10156",
        "reactivePower": "5934",
        "electricPotential": "229",
        "electricCurrent": "17113",
        "timeInstant": 1369449034000
    },
    {
        "id": 157,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10252",
        "reactivePower": "5901",
        "electricPotential": "229",
        "electricCurrent": "16997",
        "timeInstant": 1369449933000
    },
    {
        "id": 158,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10185",
        "reactivePower": "5802",
        "electricPotential": "231",
        "electricCurrent": "16996",
        "timeInstant": 1369450833000
    },
    {
        "id": 159,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10156",
        "reactivePower": "5946",
        "electricPotential": "229",
        "electricCurrent": "17130",
        "timeInstant": 1369451733000
    },
    {
        "id": 160,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10269",
        "reactivePower": "5889",
        "electricPotential": "230",
        "electricCurrent": "16945",
        "timeInstant": 1369452633000
    },
    {
        "id": 161,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10210",
        "reactivePower": "5879",
        "electricPotential": "229",
        "electricCurrent": "17115",
        "timeInstant": 1369453533000
    },
    {
        "id": 162,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10210",
        "reactivePower": "5877",
        "electricPotential": "231",
        "electricCurrent": "16996",
        "timeInstant": 1369454435000
    },
    {
        "id": 163,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10250",
        "reactivePower": "5877",
        "electricPotential": "230",
        "electricCurrent": "16876",
        "timeInstant": 1369455334000
    },
    {
        "id": 164,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10354",
        "reactivePower": "6043",
        "electricPotential": "230",
        "electricCurrent": "17183",
        "timeInstant": 1369456234000
    },
    {
        "id": 165,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10256",
        "reactivePower": "6098",
        "electricPotential": "231",
        "electricCurrent": "17220",
        "timeInstant": 1369458034000
    },
    {
        "id": 166,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10244",
        "reactivePower": "6143",
        "electricPotential": "230",
        "electricCurrent": "17234",
        "timeInstant": 1369458934000
    },
    {
        "id": 167,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10341",
        "reactivePower": "5879",
        "electricPotential": "229",
        "electricCurrent": "17080",
        "timeInstant": 1369459833000
    },
    {
        "id": 168,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10209",
        "reactivePower": "6090",
        "electricPotential": "230",
        "electricCurrent": "17269",
        "timeInstant": 1369460733000
    },
    {
        "id": 169,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10288",
        "reactivePower": "5839",
        "electricPotential": "230",
        "electricCurrent": "16962",
        "timeInstant": 1369461634000
    },
    {
        "id": 170,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10234",
        "reactivePower": "5875",
        "electricPotential": "231",
        "electricCurrent": "17013",
        "timeInstant": 1369462534000
    },
    {
        "id": 171,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "5875",
        "electricPotential": "231",
        "electricCurrent": "16996",
        "timeInstant": 1369463435000
    },
    {
        "id": 172,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369464334000
    },
    {
        "id": 174,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369512033000
    },
    {
        "id": 175,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369512933000
    },
    {
        "id": 176,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369513834000
    },
    {
        "id": 177,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369514733000
    },
    {
        "id": 178,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369515634000
    },
    {
        "id": 179,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369516534000
    },
    {
        "id": 180,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369517434000
    },
    {
        "id": 181,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10766",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369518333000
    },
    {
        "id": 182,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10973",
        "reactivePower": "6273",
        "electricPotential": "233",
        "electricCurrent": "17765",
        "timeInstant": 1369519233000
    },
    {
        "id": 183,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10943",
        "reactivePower": "6468",
        "electricPotential": "236",
        "electricCurrent": "17940",
        "timeInstant": 1369520133000
    },
    {
        "id": 184,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10761",
        "reactivePower": "6280",
        "electricPotential": "235",
        "electricCurrent": "17855",
        "timeInstant": 1369521033000
    },
    {
        "id": 185,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10270",
        "reactivePower": "6274",
        "electricPotential": "233",
        "electricCurrent": "17748",
        "timeInstant": 1369521934000
    },
    {
        "id": 186,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10493",
        "reactivePower": "5789",
        "electricPotential": "228",
        "electricCurrent": "17166",
        "timeInstant": 1369522834000
    },
    {
        "id": 187,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10252",
        "reactivePower": "5914",
        "electricPotential": "229",
        "electricCurrent": "17424",
        "timeInstant": 1369523734000
    },
    {
        "id": 188,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10175",
        "reactivePower": "5868",
        "electricPotential": "227",
        "electricCurrent": "17253",
        "timeInstant": 1369524634000
    },
    {
        "id": 189,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10372",
        "reactivePower": "5647",
        "electricPotential": "228",
        "electricCurrent": "16945",
        "timeInstant": 1369525533000
    },
    {
        "id": 190,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10594",
        "reactivePower": "5770",
        "electricPotential": "229",
        "electricCurrent": "17165",
        "timeInstant": 1369526433000
    },
    {
        "id": 191,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10456",
        "reactivePower": "6260",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1369527333000
    },
    {
        "id": 192,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10672",
        "reactivePower": "6253",
        "electricPotential": "231",
        "electricCurrent": "17459",
        "timeInstant": 1369528233000
    },
    {
        "id": 193,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10432",
        "reactivePower": "6295",
        "electricPotential": "232",
        "electricCurrent": "17700",
        "timeInstant": 1369529134000
    },
    {
        "id": 194,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10432",
        "reactivePower": "5973",
        "electricPotential": "231",
        "electricCurrent": "17238",
        "timeInstant": 1369530033000
    },
    {
        "id": 195,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10084",
        "reactivePower": "6074",
        "electricPotential": "231",
        "electricCurrent": "17325",
        "timeInstant": 1369530934000
    },
    {
        "id": 196,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "9981",
        "reactivePower": "5683",
        "electricPotential": "229",
        "electricCurrent": "16755",
        "timeInstant": 1369531833000
    },
    {
        "id": 197,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10030",
        "reactivePower": "5735",
        "electricPotential": "227",
        "electricCurrent": "16855",
        "timeInstant": 1369532734000
    },
    {
        "id": 198,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10156",
        "reactivePower": "5497",
        "electricPotential": "228",
        "electricCurrent": "16704",
        "timeInstant": 1369533634000
    },
    {
        "id": 199,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10402",
        "reactivePower": "5895",
        "electricPotential": "230",
        "electricCurrent": "16928",
        "timeInstant": 1369534533000
    },
    {
        "id": 200,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10522",
        "reactivePower": "6196",
        "electricPotential": "232",
        "electricCurrent": "17221",
        "timeInstant": 1369535434000
    },
    {
        "id": 201,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10611",
        "reactivePower": "6115",
        "electricPotential": "232",
        "electricCurrent": "17339",
        "timeInstant": 1369536333000
    },
    {
        "id": 202,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10204",
        "reactivePower": "6260",
        "electricPotential": "233",
        "electricCurrent": "17494",
        "timeInstant": 1369537233000
    },
    {
        "id": 203,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10143",
        "reactivePower": "5749",
        "electricPotential": "230",
        "electricCurrent": "16893",
        "timeInstant": 1369538134000
    },
    {
        "id": 204,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10238",
        "reactivePower": "5730",
        "electricPotential": "228",
        "electricCurrent": "16959",
        "timeInstant": 1369539034000
    },
    {
        "id": 205,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10184",
        "reactivePower": "5790",
        "electricPotential": "229",
        "electricCurrent": "17045",
        "timeInstant": 1369539933000
    },
    {
        "id": 206,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10137",
        "reactivePower": "5664",
        "electricPotential": "228",
        "electricCurrent": "16958",
        "timeInstant": 1369540833000
    },
    {
        "id": 207,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10054",
        "reactivePower": "5724",
        "electricPotential": "228",
        "electricCurrent": "16959",
        "timeInstant": 1369541734000
    },
    {
        "id": 208,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10461",
        "reactivePower": "5574",
        "electricPotential": "229",
        "electricCurrent": "16669",
        "timeInstant": 1369542633000
    },
    {
        "id": 209,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10438",
        "reactivePower": "5984",
        "electricPotential": "231",
        "electricCurrent": "17287",
        "timeInstant": 1369544434000
    },
    {
        "id": 210,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10643",
        "reactivePower": "5990",
        "electricPotential": "231",
        "electricCurrent": "17287",
        "timeInstant": 1369545334000
    },
    {
        "id": 211,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10192",
        "reactivePower": "6181",
        "electricPotential": "234",
        "electricCurrent": "17461",
        "timeInstant": 1369546234000
    },
    {
        "id": 212,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10359",
        "reactivePower": "5834",
        "electricPotential": "230",
        "electricCurrent": "16910",
        "timeInstant": 1369547133000
    },
    {
        "id": 213,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10359",
        "reactivePower": "5868",
        "electricPotential": "231",
        "electricCurrent": "17183",
        "timeInstant": 1369548034000
    },
    {
        "id": 214,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10524",
        "reactivePower": "5868",
        "electricPotential": "231",
        "electricCurrent": "17131",
        "timeInstant": 1369548933000
    },
    {
        "id": 215,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "5848",
        "electricPotential": "232",
        "electricCurrent": "17162",
        "timeInstant": 1369549834000
    },
    {
        "id": 216,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369550733000
    },
    {
        "id": 218,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369598433000
    },
    {
        "id": 219,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369599333000
    },
    {
        "id": 220,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369600234000
    },
    {
        "id": 221,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369601133000
    },
    {
        "id": 222,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369602033000
    },
    {
        "id": 223,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369602934000
    },
    {
        "id": 224,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369603833000
    },
    {
        "id": 225,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11074",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369604734000
    },
    {
        "id": 226,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10655",
        "reactivePower": "6648",
        "electricPotential": "236",
        "electricCurrent": "18197",
        "timeInstant": 1369605633000
    },
    {
        "id": 227,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10336",
        "reactivePower": "6203",
        "electricPotential": "233",
        "electricCurrent": "17597",
        "timeInstant": 1369606534000
    },
    {
        "id": 228,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10582",
        "reactivePower": "5920",
        "electricPotential": "229",
        "electricCurrent": "17321",
        "timeInstant": 1369607434000
    },
    {
        "id": 229,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10426",
        "reactivePower": "6131",
        "electricPotential": "230",
        "electricCurrent": "17579",
        "timeInstant": 1369608333000
    },
    {
        "id": 239,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6228",
        "electricPotential": "230",
        "electricCurrent": "17529",
        "timeInstant": 1369684835000
    },
    {
        "id": 242,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369685733000
    },
    {
        "id": 245,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369686633000
    },
    {
        "id": 248,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369687533000
    },
    {
        "id": 251,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369688434000
    },
    {
        "id": 254,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369689333000
    },
    {
        "id": 257,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369690233000
    },
    {
        "id": 260,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10985",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369691134000
    },
    {
        "id": 263,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10859",
        "reactivePower": "6589",
        "electricPotential": "235",
        "electricCurrent": "18112",
        "timeInstant": 1369692033000
    },
    {
        "id": 266,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6581",
        "electricPotential": "235",
        "electricCurrent": "17940",
        "timeInstant": 1369692934000
    },
    {
        "id": 269,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10246",
        "reactivePower": "5609",
        "electricPotential": "228",
        "electricCurrent": "17011",
        "timeInstant": 1369693833000
    },
    {
        "id": 272,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10246",
        "reactivePower": "5945",
        "electricPotential": "227",
        "electricCurrent": "17218",
        "timeInstant": 1369694734000
    },
    {
        "id": 275,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10312",
        "reactivePower": "5945",
        "electricPotential": "228",
        "electricCurrent": "17269",
        "timeInstant": 1369695633000
    },
    {
        "id": 278,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10312",
        "reactivePower": "6018",
        "electricPotential": "228",
        "electricCurrent": "17201",
        "timeInstant": 1369696534000
    },
    {
        "id": 281,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10133",
        "reactivePower": "6018",
        "electricPotential": "228",
        "electricCurrent": "17441",
        "timeInstant": 1369697434000
    },
    {
        "id": 284,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10230",
        "reactivePower": "5696",
        "electricPotential": "227",
        "electricCurrent": "16963",
        "timeInstant": 1369698333000
    },
    {
        "id": 287,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10143",
        "reactivePower": "6031",
        "electricPotential": "230",
        "electricCurrent": "17084",
        "timeInstant": 1369699234000
    },
    {
        "id": 290,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10432",
        "reactivePower": "6084",
        "electricPotential": "228",
        "electricCurrent": "17218",
        "timeInstant": 1369700133000
    },
    {
        "id": 293,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10354",
        "reactivePower": "6223",
        "electricPotential": "230",
        "electricCurrent": "17442",
        "timeInstant": 1369701033000
    },
    {
        "id": 296,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10337",
        "reactivePower": "5934",
        "electricPotential": "229",
        "electricCurrent": "17304",
        "timeInstant": 1369701934000
    },
    {
        "id": 299,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10428",
        "reactivePower": "5834",
        "electricPotential": "230",
        "electricCurrent": "17153",
        "timeInstant": 1369702834000
    },
    {
        "id": 302,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10216",
        "reactivePower": "5977",
        "electricPotential": "232",
        "electricCurrent": "17222",
        "timeInstant": 1369703733000
    },
    {
        "id": 305,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10287",
        "reactivePower": "5852",
        "electricPotential": "229",
        "electricCurrent": "17014",
        "timeInstant": 1369704634000
    },
    {
        "id": 308,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10370",
        "reactivePower": "5976",
        "electricPotential": "230",
        "electricCurrent": "17149",
        "timeInstant": 1369705533000
    },
    {
        "id": 311,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10372",
        "reactivePower": "6042",
        "electricPotential": "230",
        "electricCurrent": "17303",
        "timeInstant": 1369706434000
    },
    {
        "id": 314,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10317",
        "reactivePower": "6210",
        "electricPotential": "231",
        "electricCurrent": "17321",
        "timeInstant": 1369707333000
    },
    {
        "id": 317,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10281",
        "reactivePower": "6179",
        "electricPotential": "230",
        "electricCurrent": "17303",
        "timeInstant": 1369708234000
    },
    {
        "id": 320,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10329",
        "reactivePower": "5988",
        "electricPotential": "229",
        "electricCurrent": "17217",
        "timeInstant": 1369709133000
    },
    {
        "id": 323,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10167",
        "reactivePower": "6078",
        "electricPotential": "230",
        "electricCurrent": "17268",
        "timeInstant": 1369710033000
    },
    {
        "id": 326,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10281",
        "reactivePower": "5886",
        "electricPotential": "228",
        "electricCurrent": "17011",
        "timeInstant": 1369710934000
    },
    {
        "id": 329,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10281",
        "reactivePower": "5873",
        "electricPotential": "230",
        "electricCurrent": "17216",
        "timeInstant": 1369711836000
    },
    {
        "id": 332,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10096",
        "reactivePower": "5873",
        "electricPotential": "229",
        "electricCurrent": "17113",
        "timeInstant": 1369712734000
    },
    {
        "id": 335,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10025",
        "reactivePower": "5890",
        "electricPotential": "229",
        "electricCurrent": "16976",
        "timeInstant": 1369713634000
    },
    {
        "id": 338,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10025",
        "reactivePower": "5797",
        "electricPotential": "229",
        "electricCurrent": "16807",
        "timeInstant": 1369714533000
    },
    {
        "id": 341,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10214",
        "reactivePower": "5797",
        "electricPotential": "228",
        "electricCurrent": "16755",
        "timeInstant": 1369715433000
    },
    {
        "id": 344,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10161",
        "reactivePower": "6114",
        "electricPotential": "229",
        "electricCurrent": "17199",
        "timeInstant": 1369717233000
    },
    {
        "id": 347,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10151",
        "reactivePower": "5904",
        "electricPotential": "229",
        "electricCurrent": "17027",
        "timeInstant": 1369718133000
    },
    {
        "id": 350,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10058",
        "reactivePower": "5814",
        "electricPotential": "229",
        "electricCurrent": "16909",
        "timeInstant": 1369719033000
    },
    {
        "id": 353,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10083",
        "reactivePower": "5771",
        "electricPotential": "227",
        "electricCurrent": "16906",
        "timeInstant": 1369719933000
    },
    {
        "id": 356,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10042",
        "reactivePower": "6030",
        "electricPotential": "229",
        "electricCurrent": "17010",
        "timeInstant": 1369720833000
    },
    {
        "id": 359,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10305",
        "reactivePower": "5742",
        "electricPotential": "228",
        "electricCurrent": "16787",
        "timeInstant": 1369721733000
    },
    {
        "id": 362,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "5914",
        "electricPotential": "230",
        "electricCurrent": "17130",
        "timeInstant": 1369722633000
    },
    {
        "id": 365,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369723534000
    },
    {
        "id": 369,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369809933000
    },
    {
        "id": 371,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "42",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369836761000
    },
    {
        "id": 373,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "46",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369837472000
    },
    {
        "id": 375,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "67",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369838494000
    },
    {
        "id": 377,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "43",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369839019000
    },
    {
        "id": 379,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369857633000
    },
    {
        "id": 380,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369858533000
    },
    {
        "id": 381,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369859434000
    },
    {
        "id": 382,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369860333000
    },
    {
        "id": 383,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369861234000
    },
    {
        "id": 384,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369862135000
    },
    {
        "id": 385,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10335",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369863933000
    },
    {
        "id": 386,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10222",
        "reactivePower": "5925",
        "electricPotential": "228",
        "electricCurrent": "17319",
        "timeInstant": 1369864833000
    },
    {
        "id": 387,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7161",
        "reactivePower": "5685",
        "electricPotential": "228",
        "electricCurrent": "17045",
        "timeInstant": 1369865733000
    },
    {
        "id": 388,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7107",
        "reactivePower": "3770",
        "electricPotential": "193",
        "electricCurrent": "13960",
        "timeInstant": 1369866633000
    },
    {
        "id": 389,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7312",
        "reactivePower": "3756",
        "electricPotential": "193",
        "electricCurrent": "13872",
        "timeInstant": 1369867534000
    },
    {
        "id": 390,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7113",
        "reactivePower": "3859",
        "electricPotential": "193",
        "electricCurrent": "14253",
        "timeInstant": 1369868434000
    },
    {
        "id": 391,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7233",
        "reactivePower": "3744",
        "electricPotential": "190",
        "electricCurrent": "14063",
        "timeInstant": 1369869334000
    },
    {
        "id": 392,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7022",
        "reactivePower": "3926",
        "electricPotential": "192",
        "electricCurrent": "14254",
        "timeInstant": 1369870234000
    },
    {
        "id": 393,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7022",
        "reactivePower": "3853",
        "electricPotential": "188",
        "electricCurrent": "14097",
        "timeInstant": 1369871134000
    },
    {
        "id": 394,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6873",
        "reactivePower": "3853",
        "electricPotential": "189",
        "electricCurrent": "13906",
        "timeInstant": 1369872033000
    },
    {
        "id": 395,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7033",
        "reactivePower": "3669",
        "electricPotential": "188",
        "electricCurrent": "13737",
        "timeInstant": 1369872933000
    },
    {
        "id": 396,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6812",
        "reactivePower": "3600",
        "electricPotential": "191",
        "electricCurrent": "13803",
        "timeInstant": 1369873833000
    },
    {
        "id": 397,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6885",
        "reactivePower": "3529",
        "electricPotential": "188",
        "electricCurrent": "13581",
        "timeInstant": 1369874735000
    },
    {
        "id": 398,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6897",
        "reactivePower": "3565",
        "electricPotential": "189",
        "electricCurrent": "13667",
        "timeInstant": 1369875634000
    },
    {
        "id": 399,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6897",
        "reactivePower": "3613",
        "electricPotential": "188",
        "electricCurrent": "13719",
        "timeInstant": 1369876534000
    },
    {
        "id": 400,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7041",
        "reactivePower": "3613",
        "electricPotential": "189",
        "electricCurrent": "13563",
        "timeInstant": 1369877433000
    },
    {
        "id": 401,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7112",
        "reactivePower": "3847",
        "electricPotential": "192",
        "electricCurrent": "13873",
        "timeInstant": 1369878334000
    },
    {
        "id": 402,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6962",
        "reactivePower": "3824",
        "electricPotential": "193",
        "electricCurrent": "13907",
        "timeInstant": 1369879234000
    },
    {
        "id": 403,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6962",
        "reactivePower": "3831",
        "electricPotential": "190",
        "electricCurrent": "13907",
        "timeInstant": 1369880134000
    },
    {
        "id": 404,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6931",
        "reactivePower": "3660",
        "electricPotential": "190",
        "electricCurrent": "13821",
        "timeInstant": 1369881034000
    },
    {
        "id": 405,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7106",
        "reactivePower": "3660",
        "electricPotential": "190",
        "electricCurrent": "13682",
        "timeInstant": 1369881934000
    },
    {
        "id": 406,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7077",
        "reactivePower": "3824",
        "electricPotential": "193",
        "electricCurrent": "13925",
        "timeInstant": 1369882833000
    },
    {
        "id": 407,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7088",
        "reactivePower": "3740",
        "electricPotential": "192",
        "electricCurrent": "13873",
        "timeInstant": 1369883734000
    },
    {
        "id": 408,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7111",
        "reactivePower": "3871",
        "electricPotential": "192",
        "electricCurrent": "13942",
        "timeInstant": 1369884634000
    },
    {
        "id": 409,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6715",
        "reactivePower": "3871",
        "electricPotential": "192",
        "electricCurrent": "13960",
        "timeInstant": 1369885534000
    },
    {
        "id": 410,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6900",
        "reactivePower": "3428",
        "electricPotential": "187",
        "electricCurrent": "13426",
        "timeInstant": 1369886433000
    },
    {
        "id": 411,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7011",
        "reactivePower": "3582",
        "electricPotential": "190",
        "electricCurrent": "13561",
        "timeInstant": 1369887334000
    },
    {
        "id": 412,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6980",
        "reactivePower": "3710",
        "electricPotential": "191",
        "electricCurrent": "13787",
        "timeInstant": 1369888234000
    },
    {
        "id": 413,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6968",
        "reactivePower": "3685",
        "electricPotential": "191",
        "electricCurrent": "13701",
        "timeInstant": 1369890034000
    },
    {
        "id": 414,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7047",
        "reactivePower": "3563",
        "electricPotential": "191",
        "electricCurrent": "13614",
        "timeInstant": 1369890933000
    },
    {
        "id": 415,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6961",
        "reactivePower": "3710",
        "electricPotential": "192",
        "electricCurrent": "13770",
        "timeInstant": 1369891834000
    },
    {
        "id": 416,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7089",
        "reactivePower": "3619",
        "electricPotential": "190",
        "electricCurrent": "13683",
        "timeInstant": 1369892734000
    },
    {
        "id": 417,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6974",
        "reactivePower": "3673",
        "electricPotential": "192",
        "electricCurrent": "13770",
        "timeInstant": 1369893633000
    },
    {
        "id": 418,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6998",
        "reactivePower": "3436",
        "electricPotential": "191",
        "electricCurrent": "13561",
        "timeInstant": 1369894533000
    },
    {
        "id": 419,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6954",
        "reactivePower": "3571",
        "electricPotential": "191",
        "electricCurrent": "13648",
        "timeInstant": 1369895433000
    },
    {
        "id": 420,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "3684",
        "electricPotential": "192",
        "electricCurrent": "13595",
        "timeInstant": 1369896334000
    },
    {
        "id": 422,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "1",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369928845000
    },
    {
        "id": 423,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369928858000
    },
    {
        "id": 424,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369944034000
    },
    {
        "id": 425,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369944935000
    },
    {
        "id": 426,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369945833000
    },
    {
        "id": 427,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369946733000
    },
    {
        "id": 428,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369947633000
    },
    {
        "id": 429,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369948534000
    },
    {
        "id": 430,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369949433000
    },
    {
        "id": 431,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10088",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369950334000
    },
    {
        "id": 432,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6203",
        "electricPotential": "227",
        "electricCurrent": "17284",
        "timeInstant": 1369951233000
    },
    {
        "id": 433,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "5735",
        "electricPotential": "229",
        "electricCurrent": "17269",
        "timeInstant": 1369952133000
    },
    {
        "id": 434,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10450",
        "reactivePower": "5735",
        "electricPotential": "227",
        "electricCurrent": "17063",
        "timeInstant": 1369953034000
    },
    {
        "id": 435,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10439",
        "reactivePower": "6143",
        "electricPotential": "229",
        "electricCurrent": "17528",
        "timeInstant": 1369953934000
    },
    {
        "id": 436,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10529",
        "reactivePower": "6250",
        "electricPotential": "230",
        "electricCurrent": "17546",
        "timeInstant": 1369954834000
    },
    {
        "id": 437,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10546",
        "reactivePower": "6305",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1369955734000
    },
    {
        "id": 438,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369993898000
    },
    {
        "id": 442,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370007190000
    },
    {
        "id": 446,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370030434000
    },
    {
        "id": 449,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370031333000
    },
    {
        "id": 452,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370032233000
    },
    {
        "id": 455,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370033134000
    },
    {
        "id": 458,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370034033000
    },
    {
        "id": 461,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370034934000
    },
    {
        "id": 464,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370035833000
    },
    {
        "id": 467,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10098",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370036734000
    },
    {
        "id": 470,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10461",
        "reactivePower": "6311",
        "electricPotential": "230",
        "electricCurrent": "17143",
        "timeInstant": 1370037633000
    },
    {
        "id": 473,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10377",
        "reactivePower": "5999",
        "electricPotential": "231",
        "electricCurrent": "17372",
        "timeInstant": 1370038534000
    },
    {
        "id": 476,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10395",
        "reactivePower": "5946",
        "electricPotential": "229",
        "electricCurrent": "17338",
        "timeInstant": 1370039434000
    },
    {
        "id": 479,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10389",
        "reactivePower": "6055",
        "electricPotential": "229",
        "electricCurrent": "17408",
        "timeInstant": 1370040333000
    },
    {
        "id": 482,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10606",
        "reactivePower": "6210",
        "electricPotential": "230",
        "electricCurrent": "17459",
        "timeInstant": 1370041233000
    },
    {
        "id": 485,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10481",
        "reactivePower": "6337",
        "electricPotential": "231",
        "electricCurrent": "17735",
        "timeInstant": 1370042133000
    },
    {
        "id": 488,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10517",
        "reactivePower": "6457",
        "electricPotential": "231",
        "electricCurrent": "17649",
        "timeInstant": 1370043034000
    },
    {
        "id": 491,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10576",
        "reactivePower": "6216",
        "electricPotential": "231",
        "electricCurrent": "17580",
        "timeInstant": 1370043933000
    },
    {
        "id": 494,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10594",
        "reactivePower": "6354",
        "electricPotential": "232",
        "electricCurrent": "17665",
        "timeInstant": 1370044833000
    },
    {
        "id": 497,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10522",
        "reactivePower": "6336",
        "electricPotential": "231",
        "electricCurrent": "17700",
        "timeInstant": 1370045734000
    },
    {
        "id": 500,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10468",
        "reactivePower": "6282",
        "electricPotential": "231",
        "electricCurrent": "17614",
        "timeInstant": 1370046633000
    },
    {
        "id": 503,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10407",
        "reactivePower": "6179",
        "electricPotential": "230",
        "electricCurrent": "17528",
        "timeInstant": 1370047534000
    },
    {
        "id": 506,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10493",
        "reactivePower": "5866",
        "electricPotential": "229",
        "electricCurrent": "17286",
        "timeInstant": 1370048434000
    },
    {
        "id": 509,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "6209",
        "electricPotential": "231",
        "electricCurrent": "17580",
        "timeInstant": 1370049334000
    },
    {
        "id": 512,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "5898",
        "electricPotential": "231",
        "electricCurrent": "17270",
        "timeInstant": 1370050234000
    },
    {
        "id": 515,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10612",
        "reactivePower": "6102",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1370051134000
    },
    {
        "id": 518,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10570",
        "reactivePower": "6319",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1370052034000
    },
    {
        "id": 521,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "5962",
        "electricPotential": "231",
        "electricCurrent": "17493",
        "timeInstant": 1370052933000
    },
    {
        "id": 524,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10762",
        "reactivePower": "6354",
        "electricPotential": "233",
        "electricCurrent": "17804",
        "timeInstant": 1370053833000
    },
    {
        "id": 527,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10762",
        "reactivePower": "6421",
        "electricPotential": "233",
        "electricCurrent": "17804",
        "timeInstant": 1370054733000
    },
    {
        "id": 530,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10762",
        "reactivePower": "6238",
        "electricPotential": "234",
        "electricCurrent": "17717",
        "timeInstant": 1370055633000
    },
    {
        "id": 533,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10498",
        "reactivePower": "6238",
        "electricPotential": "231",
        "electricCurrent": "17596",
        "timeInstant": 1370056534000
    },
    {
        "id": 536,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10546",
        "reactivePower": "6185",
        "electricPotential": "231",
        "electricCurrent": "17509",
        "timeInstant": 1370057433000
    },
    {
        "id": 539,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "6132",
        "electricPotential": "231",
        "electricCurrent": "17545",
        "timeInstant": 1370058333000
    },
    {
        "id": 542,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10618",
        "reactivePower": "6258",
        "electricPotential": "233",
        "electricCurrent": "17734",
        "timeInstant": 1370059233000
    },
    {
        "id": 545,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10547",
        "reactivePower": "6258",
        "electricPotential": "232",
        "electricCurrent": "17648",
        "timeInstant": 1370060134000
    },
    {
        "id": 548,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10780",
        "reactivePower": "6025",
        "electricPotential": "232",
        "electricCurrent": "17358",
        "timeInstant": 1370061034000
    },
    {
        "id": 551,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10835",
        "reactivePower": "6342",
        "electricPotential": "233",
        "electricCurrent": "17787",
        "timeInstant": 1370061933000
    },
    {
        "id": 554,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "6414",
        "electricPotential": "234",
        "electricCurrent": "17908",
        "timeInstant": 1370062833000
    },
    {
        "id": 557,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10858",
        "reactivePower": "6433",
        "electricPotential": "234",
        "electricCurrent": "17804",
        "timeInstant": 1370063733000
    },
    {
        "id": 560,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10804",
        "reactivePower": "6228",
        "electricPotential": "234",
        "electricCurrent": "17820",
        "timeInstant": 1370064634000
    },
    {
        "id": 563,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10828",
        "reactivePower": "6271",
        "electricPotential": "233",
        "electricCurrent": "17770",
        "timeInstant": 1370065533000
    },
    {
        "id": 566,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10804",
        "reactivePower": "6107",
        "electricPotential": "233",
        "electricCurrent": "17682",
        "timeInstant": 1370066433000
    },
    {
        "id": 569,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10768",
        "reactivePower": "6451",
        "electricPotential": "234",
        "electricCurrent": "17786",
        "timeInstant": 1370067334000
    },
    {
        "id": 572,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6265",
        "electricPotential": "233",
        "electricCurrent": "17768",
        "timeInstant": 1370068234000
    },
    {
        "id": 575,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370069134000
    },
    {
        "id": 579,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370116834000
    },
    {
        "id": 580,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370117734000
    },
    {
        "id": 581,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370118633000
    },
    {
        "id": 582,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370119534000
    },
    {
        "id": 583,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370120434000
    },
    {
        "id": 584,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370121333000
    },
    {
        "id": 585,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370122233000
    },
    {
        "id": 586,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6684",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370123135000
    },
    {
        "id": 587,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10427",
        "reactivePower": "6684",
        "electricPotential": "230",
        "electricCurrent": "17663",
        "timeInstant": 1370124033000
    },
    {
        "id": 588,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10444",
        "reactivePower": "6173",
        "electricPotential": "230",
        "electricCurrent": "17494",
        "timeInstant": 1370124933000
    },
    {
        "id": 589,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10516",
        "reactivePower": "5693",
        "electricPotential": "229",
        "electricCurrent": "17218",
        "timeInstant": 1370125834000
    },
    {
        "id": 590,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10606",
        "reactivePower": "6102",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1370126733000
    },
    {
        "id": 591,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10630",
        "reactivePower": "6000",
        "electricPotential": "232",
        "electricCurrent": "17511",
        "timeInstant": 1370127633000
    },
    {
        "id": 592,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10732",
        "reactivePower": "6072",
        "electricPotential": "231",
        "electricCurrent": "17528",
        "timeInstant": 1370128534000
    },
    {
        "id": 593,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10775",
        "reactivePower": "6132",
        "electricPotential": "232",
        "electricCurrent": "17683",
        "timeInstant": 1370129434000
    },
    {
        "id": 594,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10703",
        "reactivePower": "6366",
        "electricPotential": "233",
        "electricCurrent": "17821",
        "timeInstant": 1370130334000
    },
    {
        "id": 595,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10667",
        "reactivePower": "6218",
        "electricPotential": "234",
        "electricCurrent": "17583",
        "timeInstant": 1370131234000
    },
    {
        "id": 596,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10846",
        "reactivePower": "6481",
        "electricPotential": "233",
        "electricCurrent": "17771",
        "timeInstant": 1370132134000
    },
    {
        "id": 597,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10907",
        "reactivePower": "6210",
        "electricPotential": "233",
        "electricCurrent": "17803",
        "timeInstant": 1370133034000
    },
    {
        "id": 598,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10715",
        "reactivePower": "6456",
        "electricPotential": "234",
        "electricCurrent": "17993",
        "timeInstant": 1370133934000
    },
    {
        "id": 599,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10715",
        "reactivePower": "6475",
        "electricPotential": "233",
        "electricCurrent": "17752",
        "timeInstant": 1370134833000
    },
    {
        "id": 600,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10907",
        "reactivePower": "6475",
        "electricPotential": "233",
        "electricCurrent": "17924",
        "timeInstant": 1370135733000
    },
    {
        "id": 601,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11058",
        "reactivePower": "6505",
        "electricPotential": "234",
        "electricCurrent": "17959",
        "timeInstant": 1370136634000
    },
    {
        "id": 602,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11027",
        "reactivePower": "6516",
        "electricPotential": "235",
        "electricCurrent": "18080",
        "timeInstant": 1370137534000
    },
    {
        "id": 603,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10816",
        "reactivePower": "6631",
        "electricPotential": "235",
        "electricCurrent": "18199",
        "timeInstant": 1370138433000
    },
    {
        "id": 604,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10792",
        "reactivePower": "6492",
        "electricPotential": "233",
        "electricCurrent": "17958",
        "timeInstant": 1370139334000
    },
    {
        "id": 605,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6360",
        "electricPotential": "233",
        "electricCurrent": "17821",
        "timeInstant": 1370140234000
    },
    {
        "id": 606,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6218",
        "electricPotential": "231",
        "electricCurrent": "17527",
        "timeInstant": 1370141133000
    },
    {
        "id": 607,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10570",
        "reactivePower": "6218",
        "electricPotential": "232",
        "electricCurrent": "17666",
        "timeInstant": 1370142033000
    },
    {
        "id": 608,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10624",
        "reactivePower": "6337",
        "electricPotential": "232",
        "electricCurrent": "17631",
        "timeInstant": 1370142934000
    },
    {
        "id": 609,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10721",
        "reactivePower": "5987",
        "electricPotential": "232",
        "electricCurrent": "17476",
        "timeInstant": 1370143833000
    },
    {
        "id": 610,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6309",
        "electricPotential": "234",
        "electricCurrent": "17635",
        "timeInstant": 1370144734000
    },
    {
        "id": 611,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11093",
        "reactivePower": "5506",
        "electricPotential": "227",
        "electricCurrent": "17063",
        "timeInstant": 1370145634000
    },
    {
        "id": 612,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10961",
        "reactivePower": "6643",
        "electricPotential": "236",
        "electricCurrent": "18200",
        "timeInstant": 1370146534000
    },
    {
        "id": 613,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10695",
        "reactivePower": "6462",
        "electricPotential": "234",
        "electricCurrent": "17992",
        "timeInstant": 1370147433000
    },
    {
        "id": 614,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10932",
        "reactivePower": "6493",
        "electricPotential": "233",
        "electricCurrent": "17786",
        "timeInstant": 1370148334000
    },
    {
        "id": 615,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10654",
        "reactivePower": "6469",
        "electricPotential": "235",
        "electricCurrent": "18011",
        "timeInstant": 1370149234000
    },
    {
        "id": 616,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10900",
        "reactivePower": "6290",
        "electricPotential": "232",
        "electricCurrent": "17650",
        "timeInstant": 1370150133000
    },
    {
        "id": 617,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10900",
        "reactivePower": "6211",
        "electricPotential": "234",
        "electricCurrent": "17820",
        "timeInstant": 1370151033000
    },
    {
        "id": 618,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10632",
        "reactivePower": "6211",
        "electricPotential": "232",
        "electricCurrent": "17666",
        "timeInstant": 1370151934000
    },
    {
        "id": 619,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10869",
        "reactivePower": "5888",
        "electricPotential": "232",
        "electricCurrent": "17359",
        "timeInstant": 1370152834000
    },
    {
        "id": 620,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10884",
        "reactivePower": "6409",
        "electricPotential": "235",
        "electricCurrent": "17872",
        "timeInstant": 1370153733000
    },
    {
        "id": 621,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6319",
        "electricPotential": "234",
        "electricCurrent": "17857",
        "timeInstant": 1370154634000
    },
    {
        "id": 622,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370155533000
    },
    {
        "id": 624,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370203233000
    },
    {
        "id": 625,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370204133000
    },
    {
        "id": 626,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370205034000
    },
    {
        "id": 627,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370205934000
    },
    {
        "id": 628,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370206833000
    },
    {
        "id": 629,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370207734000
    },
    {
        "id": 630,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370208633000
    },
    {
        "id": 631,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10215",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370209533000
    },
    {
        "id": 632,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10252",
        "reactivePower": "6401",
        "electricPotential": "229",
        "electricCurrent": "17507",
        "timeInstant": 1370210434000
    },
    {
        "id": 633,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "5886",
        "electricPotential": "228",
        "electricCurrent": "17236",
        "timeInstant": 1370211334000
    },
    {
        "id": 634,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "5879",
        "electricPotential": "229",
        "electricCurrent": "17393",
        "timeInstant": 1370212233000
    },
    {
        "id": 635,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10505",
        "reactivePower": "5879",
        "electricPotential": "230",
        "electricCurrent": "17287",
        "timeInstant": 1370213134000
    },
    {
        "id": 636,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10648",
        "reactivePower": "6446",
        "electricPotential": "231",
        "electricCurrent": "17649",
        "timeInstant": 1370214034000
    },
    {
        "id": 637,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10703",
        "reactivePower": "6121",
        "electricPotential": "232",
        "electricCurrent": "17649",
        "timeInstant": 1370214934000
    },
    {
        "id": 638,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10883",
        "reactivePower": "5951",
        "electricPotential": "231",
        "electricCurrent": "17613",
        "timeInstant": 1370215834000
    },
    {
        "id": 639,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10883",
        "reactivePower": "6386",
        "electricPotential": "233",
        "electricCurrent": "17872",
        "timeInstant": 1370216733000
    },
    {
        "id": 640,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10768",
        "reactivePower": "6386",
        "electricPotential": "232",
        "electricCurrent": "17597",
        "timeInstant": 1370217634000
    },
    {
        "id": 641,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10817",
        "reactivePower": "6294",
        "electricPotential": "234",
        "electricCurrent": "17785",
        "timeInstant": 1370218533000
    },
    {
        "id": 642,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10930",
        "reactivePower": "6313",
        "electricPotential": "234",
        "electricCurrent": "17803",
        "timeInstant": 1370219434000
    },
    {
        "id": 643,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10714",
        "reactivePower": "6362",
        "electricPotential": "234",
        "electricCurrent": "17907",
        "timeInstant": 1370220334000
    },
    {
        "id": 644,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6343",
        "electricPotential": "234",
        "electricCurrent": "17700",
        "timeInstant": 1370221233000
    },
    {
        "id": 645,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10587",
        "reactivePower": "6132",
        "electricPotential": "229",
        "electricCurrent": "17252",
        "timeInstant": 1370222133000
    },
    {
        "id": 648,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10587",
        "reactivePower": "0",
        "electricPotential": "232",
        "electricCurrent": "17510",
        "timeInstant": 1370289634000
    },
    {
        "id": 649,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "232",
        "electricCurrent": "0",
        "timeInstant": 1370290533000
    },
    {
        "id": 650,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370291434000
    },
    {
        "id": 651,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370292334000
    },
    {
        "id": 652,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370293234000
    },
    {
        "id": 653,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370294133000
    },
    {
        "id": 654,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10463",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370295934000
    },
    {
        "id": 655,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10463",
        "reactivePower": "3891",
        "electricPotential": "230",
        "electricCurrent": "17477",
        "timeInstant": 1370296833000
    },
    {
        "id": 656,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10403",
        "reactivePower": "3891",
        "electricPotential": "192",
        "electricCurrent": "14030",
        "timeInstant": 1370297733000
    },
    {
        "id": 88,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369340134000
    },
    {
        "id": 89,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369341033000
    },
    {
        "id": 90,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369341934000
    },
    {
        "id": 91,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369342834000
    },
    {
        "id": 92,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369343733000
    },
    {
        "id": 93,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369344634000
    },
    {
        "id": 94,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10240",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369345533000
    },
    {
        "id": 95,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10414",
        "reactivePower": "6115",
        "electricPotential": "228",
        "electricCurrent": "17304",
        "timeInstant": 1369346434000
    },
    {
        "id": 96,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "5758",
        "electricPotential": "229",
        "electricCurrent": "17253",
        "timeInstant": 1369347334000
    },
    {
        "id": 97,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10475",
        "reactivePower": "5831",
        "electricPotential": "229",
        "electricCurrent": "17217",
        "timeInstant": 1369348233000
    },
    {
        "id": 98,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10360",
        "reactivePower": "6191",
        "electricPotential": "231",
        "electricCurrent": "17528",
        "timeInstant": 1369349134000
    },
    {
        "id": 99,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10792",
        "reactivePower": "6137",
        "electricPotential": "230",
        "electricCurrent": "17407",
        "timeInstant": 1369350034000
    },
    {
        "id": 100,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "6457",
        "electricPotential": "233",
        "electricCurrent": "17872",
        "timeInstant": 1369135000
    },
    {
        "id": 101,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10793",
        "reactivePower": "6360",
        "electricPotential": "233",
        "electricCurrent": "17821",
        "timeInstant": 1369351834000
    },
    {
        "id": 102,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10594",
        "reactivePower": "6463",
        "electricPotential": "233",
        "electricCurrent": "17924",
        "timeInstant": 1369352734000
    },
    {
        "id": 103,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10864",
        "reactivePower": "6463",
        "electricPotential": "233",
        "electricCurrent": "17700",
        "timeInstant": 1369353633000
    },
    {
        "id": 104,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10750",
        "reactivePower": "6427",
        "electricPotential": "234",
        "electricCurrent": "17872",
        "timeInstant": 1369354534000
    },
    {
        "id": 105,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10750",
        "reactivePower": "6337",
        "electricPotential": "234",
        "electricCurrent": "17925",
        "timeInstant": 1369355433000
    },
    {
        "id": 106,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10625",
        "reactivePower": "6337",
        "electricPotential": "232",
        "electricCurrent": "17614",
        "timeInstant": 1369356333000
    },
    {
        "id": 107,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10625",
        "reactivePower": "6342",
        "electricPotential": "233",
        "electricCurrent": "17597",
        "timeInstant": 1369357233000
    },
    {
        "id": 108,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10763",
        "reactivePower": "6505",
        "electricPotential": "233",
        "electricCurrent": "17769",
        "timeInstant": 1369358134000
    },
    {
        "id": 109,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10750",
        "reactivePower": "6724",
        "electricPotential": "234",
        "electricCurrent": "17925",
        "timeInstant": 1369359033000
    },
    {
        "id": 110,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10732",
        "reactivePower": "6603",
        "electricPotential": "234",
        "electricCurrent": "17856",
        "timeInstant": 1369359934000
    },
    {
        "id": 111,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10733",
        "reactivePower": "6500",
        "electricPotential": "234",
        "electricCurrent": "17752",
        "timeInstant": 1369360833000
    },
    {
        "id": 112,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10582",
        "reactivePower": "6429",
        "electricPotential": "233",
        "electricCurrent": "17787",
        "timeInstant": 1369361734000
    },
    {
        "id": 113,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10582",
        "reactivePower": "6609",
        "electricPotential": "233",
        "electricCurrent": "17614",
        "timeInstant": 1369362636000
    },
    {
        "id": 114,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10720",
        "reactivePower": "6609",
        "electricPotential": "235",
        "electricCurrent": "17786",
        "timeInstant": 1369363534000
    },
    {
        "id": 115,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10797",
        "reactivePower": "6590",
        "electricPotential": "235",
        "electricCurrent": "17735",
        "timeInstant": 1369364432000
    },
    {
        "id": 116,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10600",
        "reactivePower": "6566",
        "electricPotential": "235",
        "electricCurrent": "17821",
        "timeInstant": 1369365334000
    },
    {
        "id": 117,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10593",
        "reactivePower": "6536",
        "electricPotential": "233",
        "electricCurrent": "17701",
        "timeInstant": 1369366234000
    },
    {
        "id": 118,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10720",
        "reactivePower": "6378",
        "electricPotential": "233",
        "electricCurrent": "17647",
        "timeInstant": 1369367134000
    },
    {
        "id": 119,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10702",
        "reactivePower": "6411",
        "electricPotential": "234",
        "electricCurrent": "17700",
        "timeInstant": 1369368033000
    },
    {
        "id": 120,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10593",
        "reactivePower": "6481",
        "electricPotential": "234",
        "electricCurrent": "17700",
        "timeInstant": 1369368933000
    },
    {
        "id": 121,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10552",
        "reactivePower": "6289",
        "electricPotential": "234",
        "electricCurrent": "17562",
        "timeInstant": 1369369833000
    },
    {
        "id": 122,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10738",
        "reactivePower": "6224",
        "electricPotential": "232",
        "electricCurrent": "17442",
        "timeInstant": 1369371634000
    },
    {
        "id": 123,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10852",
        "reactivePower": "6423",
        "electricPotential": "234",
        "electricCurrent": "17683",
        "timeInstant": 1369372533000
    },
    {
        "id": 124,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10625",
        "reactivePower": "6512",
        "electricPotential": "236",
        "electricCurrent": "17821",
        "timeInstant": 1369373433000
    },
    {
        "id": 125,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10681",
        "reactivePower": "6111",
        "electricPotential": "234",
        "electricCurrent": "17445",
        "timeInstant": 1369374333000
    },
    {
        "id": 126,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10484",
        "reactivePower": "6318",
        "electricPotential": "234",
        "electricCurrent": "17629",
        "timeInstant": 1369375233000
    },
    {
        "id": 127,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10714",
        "reactivePower": "6026",
        "electricPotential": "232",
        "electricCurrent": "17305",
        "timeInstant": 1369376133000
    },
    {
        "id": 128,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6149",
        "electricPotential": "234",
        "electricCurrent": "17528",
        "timeInstant": 1369377034000
    },
    {
        "id": 129,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369377933000
    },
    {
        "id": 130,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "",
        "electricPotential": "",
        "electricCurrent": "",
        "timeInstant": 1369425633000
    },
    {
        "id": 131,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369426534000
    },
    {
        "id": 132,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369427433000
    },
    {
        "id": 133,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369428334000
    },
    {
        "id": 134,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369429233000
    },
    {
        "id": 135,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369430133000
    },
    {
        "id": 136,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369431033000
    },
    {
        "id": 137,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10203",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369431934000
    },
    {
        "id": 138,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10529",
        "reactivePower": "5584",
        "electricPotential": "227",
        "electricCurrent": "17062",
        "timeInstant": 1369432834000
    },
    {
        "id": 139,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10576",
        "reactivePower": "6112",
        "electricPotential": "231",
        "electricCurrent": "17459",
        "timeInstant": 1369433734000
    },
    {
        "id": 140,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10409",
        "reactivePower": "6144",
        "electricPotential": "231",
        "electricCurrent": "17545",
        "timeInstant": 1369434634000
    },
    {
        "id": 141,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10229",
        "reactivePower": "6131",
        "electricPotential": "230",
        "electricCurrent": "17425",
        "timeInstant": 1369435533000
    },
    {
        "id": 142,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10414",
        "reactivePower": "6040",
        "electricPotential": "229",
        "electricCurrent": "17235",
        "timeInstant": 1369436433000
    },
    {
        "id": 143,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10451",
        "reactivePower": "6143",
        "electricPotential": "230",
        "electricCurrent": "17458",
        "timeInstant": 1369437334000
    },
    {
        "id": 144,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10312",
        "reactivePower": "6179",
        "electricPotential": "230",
        "electricCurrent": "17511",
        "timeInstant": 1369438234000
    },
    {
        "id": 145,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10468",
        "reactivePower": "5993",
        "electricPotential": "228",
        "electricCurrent": "17338",
        "timeInstant": 1369439134000
    },
    {
        "id": 146,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10354",
        "reactivePower": "6192",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1369440034000
    },
    {
        "id": 147,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10234",
        "reactivePower": "6100",
        "electricPotential": "230",
        "electricCurrent": "17286",
        "timeInstant": 1369440934000
    },
    {
        "id": 148,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10300",
        "reactivePower": "5868",
        "electricPotential": "228",
        "electricCurrent": "17149",
        "timeInstant": 1369441834000
    },
    {
        "id": 149,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10234",
        "reactivePower": "6089",
        "electricPotential": "229",
        "electricCurrent": "17320",
        "timeInstant": 1369442733000
    },
    {
        "id": 150,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10456",
        "reactivePower": "5957",
        "electricPotential": "229",
        "electricCurrent": "17183",
        "timeInstant": 1369443633000
    },
    {
        "id": 151,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10060",
        "reactivePower": "5999",
        "electricPotential": "230",
        "electricCurrent": "17424",
        "timeInstant": 1369444533000
    },
    {
        "id": 152,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "9971",
        "reactivePower": "5945",
        "electricPotential": "227",
        "electricCurrent": "17027",
        "timeInstant": 1369445434000
    },
    {
        "id": 153,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "9971",
        "reactivePower": "5999",
        "electricPotential": "228",
        "electricCurrent": "16721",
        "timeInstant": 1369446333000
    },
    {
        "id": 154,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10204",
        "reactivePower": "5999",
        "electricPotential": "230",
        "electricCurrent": "17217",
        "timeInstant": 1369447233000
    },
    {
        "id": 155,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10167",
        "reactivePower": "5839",
        "electricPotential": "230",
        "electricCurrent": "16979",
        "timeInstant": 1369448133000
    },
    {
        "id": 156,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10156",
        "reactivePower": "5934",
        "electricPotential": "229",
        "electricCurrent": "17113",
        "timeInstant": 1369449034000
    },
    {
        "id": 157,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10252",
        "reactivePower": "5901",
        "electricPotential": "229",
        "electricCurrent": "16997",
        "timeInstant": 1369449933000
    },
    {
        "id": 158,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10185",
        "reactivePower": "5802",
        "electricPotential": "231",
        "electricCurrent": "16996",
        "timeInstant": 1369450833000
    },
    {
        "id": 159,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10156",
        "reactivePower": "5946",
        "electricPotential": "229",
        "electricCurrent": "17130",
        "timeInstant": 1369451733000
    },
    {
        "id": 160,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10269",
        "reactivePower": "5889",
        "electricPotential": "230",
        "electricCurrent": "16945",
        "timeInstant": 1369452633000
    },
    {
        "id": 161,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10210",
        "reactivePower": "5879",
        "electricPotential": "229",
        "electricCurrent": "17115",
        "timeInstant": 1369453533000
    },
    {
        "id": 162,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10210",
        "reactivePower": "5877",
        "electricPotential": "231",
        "electricCurrent": "16996",
        "timeInstant": 1369454435000
    },
    {
        "id": 163,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10250",
        "reactivePower": "5877",
        "electricPotential": "230",
        "electricCurrent": "16876",
        "timeInstant": 1369455334000
    },
    {
        "id": 164,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10354",
        "reactivePower": "6043",
        "electricPotential": "230",
        "electricCurrent": "17183",
        "timeInstant": 1369456234000
    },
    {
        "id": 165,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10256",
        "reactivePower": "6098",
        "electricPotential": "231",
        "electricCurrent": "17220",
        "timeInstant": 1369458034000
    },
    {
        "id": 166,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10244",
        "reactivePower": "6143",
        "electricPotential": "230",
        "electricCurrent": "17234",
        "timeInstant": 1369458934000
    },
    {
        "id": 167,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10341",
        "reactivePower": "5879",
        "electricPotential": "229",
        "electricCurrent": "17080",
        "timeInstant": 1369459833000
    },
    {
        "id": 168,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10209",
        "reactivePower": "6090",
        "electricPotential": "230",
        "electricCurrent": "17269",
        "timeInstant": 1369460733000
    },
    {
        "id": 169,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10288",
        "reactivePower": "5839",
        "electricPotential": "230",
        "electricCurrent": "16962",
        "timeInstant": 1369461634000
    },
    {
        "id": 170,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10234",
        "reactivePower": "5875",
        "electricPotential": "231",
        "electricCurrent": "17013",
        "timeInstant": 1369462534000
    },
    {
        "id": 171,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "5875",
        "electricPotential": "231",
        "electricCurrent": "16996",
        "timeInstant": 1369463435000
    },
    {
        "id": 172,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369464334000
    },
    {
        "id": 174,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369512033000
    },
    {
        "id": 175,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369512933000
    },
    {
        "id": 176,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369513834000
    },
    {
        "id": 177,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369514733000
    },
    {
        "id": 178,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369515634000
    },
    {
        "id": 179,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369516534000
    },
    {
        "id": 180,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369517434000
    },
    {
        "id": 181,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10766",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369518333000
    },
    {
        "id": 182,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10973",
        "reactivePower": "6273",
        "electricPotential": "233",
        "electricCurrent": "17765",
        "timeInstant": 1369519233000
    },
    {
        "id": 183,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10943",
        "reactivePower": "6468",
        "electricPotential": "236",
        "electricCurrent": "17940",
        "timeInstant": 1369520133000
    },
    {
        "id": 184,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10761",
        "reactivePower": "6280",
        "electricPotential": "235",
        "electricCurrent": "17855",
        "timeInstant": 1369521033000
    },
    {
        "id": 185,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10270",
        "reactivePower": "6274",
        "electricPotential": "233",
        "electricCurrent": "17748",
        "timeInstant": 1369521934000
    },
    {
        "id": 186,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10493",
        "reactivePower": "5789",
        "electricPotential": "228",
        "electricCurrent": "17166",
        "timeInstant": 1369522834000
    },
    {
        "id": 187,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10252",
        "reactivePower": "5914",
        "electricPotential": "229",
        "electricCurrent": "17424",
        "timeInstant": 1369523734000
    },
    {
        "id": 188,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10175",
        "reactivePower": "5868",
        "electricPotential": "227",
        "electricCurrent": "17253",
        "timeInstant": 1369524634000
    },
    {
        "id": 189,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10372",
        "reactivePower": "5647",
        "electricPotential": "228",
        "electricCurrent": "16945",
        "timeInstant": 1369525533000
    },
    {
        "id": 190,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10594",
        "reactivePower": "5770",
        "electricPotential": "229",
        "electricCurrent": "17165",
        "timeInstant": 1369526433000
    },
    {
        "id": 191,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10456",
        "reactivePower": "6260",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1369527333000
    },
    {
        "id": 192,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10672",
        "reactivePower": "6253",
        "electricPotential": "231",
        "electricCurrent": "17459",
        "timeInstant": 1369528233000
    },
    {
        "id": 193,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10432",
        "reactivePower": "6295",
        "electricPotential": "232",
        "electricCurrent": "17700",
        "timeInstant": 1369529134000
    },
    {
        "id": 194,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10432",
        "reactivePower": "5973",
        "electricPotential": "231",
        "electricCurrent": "17238",
        "timeInstant": 1369530033000
    },
    {
        "id": 195,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10084",
        "reactivePower": "6074",
        "electricPotential": "231",
        "electricCurrent": "17325",
        "timeInstant": 1369530934000
    },
    {
        "id": 196,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "9981",
        "reactivePower": "5683",
        "electricPotential": "229",
        "electricCurrent": "16755",
        "timeInstant": 1369531833000
    },
    {
        "id": 197,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10030",
        "reactivePower": "5735",
        "electricPotential": "227",
        "electricCurrent": "16855",
        "timeInstant": 1369532734000
    },
    {
        "id": 198,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10156",
        "reactivePower": "5497",
        "electricPotential": "228",
        "electricCurrent": "16704",
        "timeInstant": 1369533634000
    },
    {
        "id": 199,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10402",
        "reactivePower": "5895",
        "electricPotential": "230",
        "electricCurrent": "16928",
        "timeInstant": 1369534533000
    },
    {
        "id": 200,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10522",
        "reactivePower": "6196",
        "electricPotential": "232",
        "electricCurrent": "17221",
        "timeInstant": 1369535434000
    },
    {
        "id": 201,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10611",
        "reactivePower": "6115",
        "electricPotential": "232",
        "electricCurrent": "17339",
        "timeInstant": 1369536333000
    },
    {
        "id": 202,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10204",
        "reactivePower": "6260",
        "electricPotential": "233",
        "electricCurrent": "17494",
        "timeInstant": 1369537233000
    },
    {
        "id": 203,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10143",
        "reactivePower": "5749",
        "electricPotential": "230",
        "electricCurrent": "16893",
        "timeInstant": 1369538134000
    },
    {
        "id": 204,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10238",
        "reactivePower": "5730",
        "electricPotential": "228",
        "electricCurrent": "16959",
        "timeInstant": 1369539034000
    },
    {
        "id": 205,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10184",
        "reactivePower": "5790",
        "electricPotential": "229",
        "electricCurrent": "17045",
        "timeInstant": 1369539933000
    },
    {
        "id": 206,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10137",
        "reactivePower": "5664",
        "electricPotential": "228",
        "electricCurrent": "16958",
        "timeInstant": 1369540833000
    },
    {
        "id": 207,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10054",
        "reactivePower": "5724",
        "electricPotential": "228",
        "electricCurrent": "16959",
        "timeInstant": 1369541734000
    },
    {
        "id": 208,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10461",
        "reactivePower": "5574",
        "electricPotential": "229",
        "electricCurrent": "16669",
        "timeInstant": 1369542633000
    },
    {
        "id": 209,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10438",
        "reactivePower": "5984",
        "electricPotential": "231",
        "electricCurrent": "17287",
        "timeInstant": 1369544434000
    },
    {
        "id": 210,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10643",
        "reactivePower": "5990",
        "electricPotential": "231",
        "electricCurrent": "17287",
        "timeInstant": 1369545334000
    },
    {
        "id": 211,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10192",
        "reactivePower": "6181",
        "electricPotential": "234",
        "electricCurrent": "17461",
        "timeInstant": 1369546234000
    },
    {
        "id": 212,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10359",
        "reactivePower": "5834",
        "electricPotential": "230",
        "electricCurrent": "16910",
        "timeInstant": 1369547133000
    },
    {
        "id": 213,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10359",
        "reactivePower": "5868",
        "electricPotential": "231",
        "electricCurrent": "17183",
        "timeInstant": 1369548034000
    },
    {
        "id": 214,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10524",
        "reactivePower": "5868",
        "electricPotential": "231",
        "electricCurrent": "17131",
        "timeInstant": 1369548933000
    },
    {
        "id": 215,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "5848",
        "electricPotential": "232",
        "electricCurrent": "17162",
        "timeInstant": 1369549834000
    },
    {
        "id": 216,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369550733000
    },
    {
        "id": 218,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369598433000
    },
    {
        "id": 219,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369599333000
    },
    {
        "id": 220,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369600234000
    },
    {
        "id": 221,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369601133000
    },
    {
        "id": 222,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369602033000
    },
    {
        "id": 223,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369602934000
    },
    {
        "id": 224,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369603833000
    },
    {
        "id": 225,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11074",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369604734000
    },
    {
        "id": 226,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10655",
        "reactivePower": "6648",
        "electricPotential": "236",
        "electricCurrent": "18197",
        "timeInstant": 1369605633000
    },
    {
        "id": 227,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10336",
        "reactivePower": "6203",
        "electricPotential": "233",
        "electricCurrent": "17597",
        "timeInstant": 1369606534000
    },
    {
        "id": 228,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10582",
        "reactivePower": "5920",
        "electricPotential": "229",
        "electricCurrent": "17321",
        "timeInstant": 1369607434000
    },
    {
        "id": 229,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10426",
        "reactivePower": "6131",
        "electricPotential": "230",
        "electricCurrent": "17579",
        "timeInstant": 1369608333000
    },
    {
        "id": 239,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6228",
        "electricPotential": "230",
        "electricCurrent": "17529",
        "timeInstant": 1369684835000
    },
    {
        "id": 242,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369685733000
    },
    {
        "id": 245,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369686633000
    },
    {
        "id": 248,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369687533000
    },
    {
        "id": 251,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369688434000
    },
    {
        "id": 254,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369689333000
    },
    {
        "id": 257,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369690233000
    },
    {
        "id": 260,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10985",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369691134000
    },
    {
        "id": 263,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10859",
        "reactivePower": "6589",
        "electricPotential": "235",
        "electricCurrent": "18112",
        "timeInstant": 1369692033000
    },
    {
        "id": 266,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6581",
        "electricPotential": "235",
        "electricCurrent": "17940",
        "timeInstant": 1369692934000
    },
    {
        "id": 269,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10246",
        "reactivePower": "5609",
        "electricPotential": "228",
        "electricCurrent": "17011",
        "timeInstant": 1369693833000
    },
    {
        "id": 272,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10246",
        "reactivePower": "5945",
        "electricPotential": "227",
        "electricCurrent": "17218",
        "timeInstant": 1369694734000
    },
    {
        "id": 275,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10312",
        "reactivePower": "5945",
        "electricPotential": "228",
        "electricCurrent": "17269",
        "timeInstant": 1369695633000
    },
    {
        "id": 278,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10312",
        "reactivePower": "6018",
        "electricPotential": "228",
        "electricCurrent": "17201",
        "timeInstant": 1369696534000
    },
    {
        "id": 281,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10133",
        "reactivePower": "6018",
        "electricPotential": "228",
        "electricCurrent": "17441",
        "timeInstant": 1369697434000
    },
    {
        "id": 284,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10230",
        "reactivePower": "5696",
        "electricPotential": "227",
        "electricCurrent": "16963",
        "timeInstant": 1369698333000
    },
    {
        "id": 287,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10143",
        "reactivePower": "6031",
        "electricPotential": "230",
        "electricCurrent": "17084",
        "timeInstant": 1369699234000
    },
    {
        "id": 290,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10432",
        "reactivePower": "6084",
        "electricPotential": "228",
        "electricCurrent": "17218",
        "timeInstant": 1369700133000
    },
    {
        "id": 293,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10354",
        "reactivePower": "6223",
        "electricPotential": "230",
        "electricCurrent": "17442",
        "timeInstant": 1369701033000
    },
    {
        "id": 296,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10337",
        "reactivePower": "5934",
        "electricPotential": "229",
        "electricCurrent": "17304",
        "timeInstant": 1369701934000
    },
    {
        "id": 299,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10428",
        "reactivePower": "5834",
        "electricPotential": "230",
        "electricCurrent": "17153",
        "timeInstant": 1369702834000
    },
    {
        "id": 302,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10216",
        "reactivePower": "5977",
        "electricPotential": "232",
        "electricCurrent": "17222",
        "timeInstant": 1369703733000
    },
    {
        "id": 305,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10287",
        "reactivePower": "5852",
        "electricPotential": "229",
        "electricCurrent": "17014",
        "timeInstant": 1369704634000
    },
    {
        "id": 308,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10370",
        "reactivePower": "5976",
        "electricPotential": "230",
        "electricCurrent": "17149",
        "timeInstant": 1369705533000
    },
    {
        "id": 311,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10372",
        "reactivePower": "6042",
        "electricPotential": "230",
        "electricCurrent": "17303",
        "timeInstant": 1369706434000
    },
    {
        "id": 314,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10317",
        "reactivePower": "6210",
        "electricPotential": "231",
        "electricCurrent": "17321",
        "timeInstant": 1369707333000
    },
    {
        "id": 317,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10281",
        "reactivePower": "6179",
        "electricPotential": "230",
        "electricCurrent": "17303",
        "timeInstant": 1369708234000
    },
    {
        "id": 320,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10329",
        "reactivePower": "5988",
        "electricPotential": "229",
        "electricCurrent": "17217",
        "timeInstant": 1369709133000
    },
    {
        "id": 323,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10167",
        "reactivePower": "6078",
        "electricPotential": "230",
        "electricCurrent": "17268",
        "timeInstant": 1369710033000
    },
    {
        "id": 326,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10281",
        "reactivePower": "5886",
        "electricPotential": "228",
        "electricCurrent": "17011",
        "timeInstant": 1369710934000
    },
    {
        "id": 329,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10281",
        "reactivePower": "5873",
        "electricPotential": "230",
        "electricCurrent": "17216",
        "timeInstant": 1369711836000
    },
    {
        "id": 332,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10096",
        "reactivePower": "5873",
        "electricPotential": "229",
        "electricCurrent": "17113",
        "timeInstant": 1369712734000
    },
    {
        "id": 335,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10025",
        "reactivePower": "5890",
        "electricPotential": "229",
        "electricCurrent": "16976",
        "timeInstant": 1369713634000
    },
    {
        "id": 338,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10025",
        "reactivePower": "5797",
        "electricPotential": "229",
        "electricCurrent": "16807",
        "timeInstant": 1369714533000
    },
    {
        "id": 341,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10214",
        "reactivePower": "5797",
        "electricPotential": "228",
        "electricCurrent": "16755",
        "timeInstant": 1369715433000
    },
    {
        "id": 344,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10161",
        "reactivePower": "6114",
        "electricPotential": "229",
        "electricCurrent": "17199",
        "timeInstant": 1369717233000
    },
    {
        "id": 347,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10151",
        "reactivePower": "5904",
        "electricPotential": "229",
        "electricCurrent": "17027",
        "timeInstant": 1369718133000
    },
    {
        "id": 350,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10058",
        "reactivePower": "5814",
        "electricPotential": "229",
        "electricCurrent": "16909",
        "timeInstant": 1369719033000
    },
    {
        "id": 353,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10083",
        "reactivePower": "5771",
        "electricPotential": "227",
        "electricCurrent": "16906",
        "timeInstant": 1369719933000
    },
    {
        "id": 356,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10042",
        "reactivePower": "6030",
        "electricPotential": "229",
        "electricCurrent": "17010",
        "timeInstant": 1369720833000
    },
    {
        "id": 359,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10305",
        "reactivePower": "5742",
        "electricPotential": "228",
        "electricCurrent": "16787",
        "timeInstant": 1369721733000
    },
    {
        "id": 362,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "5914",
        "electricPotential": "230",
        "electricCurrent": "17130",
        "timeInstant": 1369722633000
    },
    {
        "id": 365,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369723534000
    },
    {
        "id": 369,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369809933000
    },
    {
        "id": 371,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "42",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369836761000
    },
    {
        "id": 373,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "46",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369837472000
    },
    {
        "id": 375,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "67",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369838494000
    },
    {
        "id": 377,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "43",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369839019000
    },
    {
        "id": 379,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369857633000
    },
    {
        "id": 380,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369858533000
    },
    {
        "id": 381,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369859434000
    },
    {
        "id": 382,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369860333000
    },
    {
        "id": 383,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369861234000
    },
    {
        "id": 384,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369862135000
    },
    {
        "id": 385,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10335",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369863933000
    },
    {
        "id": 386,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10222",
        "reactivePower": "5925",
        "electricPotential": "228",
        "electricCurrent": "17319",
        "timeInstant": 1369864833000
    },
    {
        "id": 387,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7161",
        "reactivePower": "5685",
        "electricPotential": "228",
        "electricCurrent": "17045",
        "timeInstant": 1369865733000
    },
    {
        "id": 388,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7107",
        "reactivePower": "3770",
        "electricPotential": "193",
        "electricCurrent": "13960",
        "timeInstant": 1369866633000
    },
    {
        "id": 389,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7312",
        "reactivePower": "3756",
        "electricPotential": "193",
        "electricCurrent": "13872",
        "timeInstant": 1369867534000
    },
    {
        "id": 390,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7113",
        "reactivePower": "3859",
        "electricPotential": "193",
        "electricCurrent": "14253",
        "timeInstant": 1369868434000
    },
    {
        "id": 391,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7233",
        "reactivePower": "3744",
        "electricPotential": "190",
        "electricCurrent": "14063",
        "timeInstant": 1369869334000
    },
    {
        "id": 392,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7022",
        "reactivePower": "3926",
        "electricPotential": "192",
        "electricCurrent": "14254",
        "timeInstant": 1369870234000
    },
    {
        "id": 393,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7022",
        "reactivePower": "3853",
        "electricPotential": "188",
        "electricCurrent": "14097",
        "timeInstant": 1369871134000
    },
    {
        "id": 394,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6873",
        "reactivePower": "3853",
        "electricPotential": "189",
        "electricCurrent": "13906",
        "timeInstant": 1369872033000
    },
    {
        "id": 395,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7033",
        "reactivePower": "3669",
        "electricPotential": "188",
        "electricCurrent": "13737",
        "timeInstant": 1369872933000
    },
    {
        "id": 396,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6812",
        "reactivePower": "3600",
        "electricPotential": "191",
        "electricCurrent": "13803",
        "timeInstant": 1369873833000
    },
    {
        "id": 397,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6885",
        "reactivePower": "3529",
        "electricPotential": "188",
        "electricCurrent": "13581",
        "timeInstant": 1369874735000
    },
    {
        "id": 398,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6897",
        "reactivePower": "3565",
        "electricPotential": "189",
        "electricCurrent": "13667",
        "timeInstant": 1369875634000
    },
    {
        "id": 399,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6897",
        "reactivePower": "3613",
        "electricPotential": "188",
        "electricCurrent": "13719",
        "timeInstant": 1369876534000
    },
    {
        "id": 400,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7041",
        "reactivePower": "3613",
        "electricPotential": "189",
        "electricCurrent": "13563",
        "timeInstant": 1369877433000
    },
    {
        "id": 401,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7112",
        "reactivePower": "3847",
        "electricPotential": "192",
        "electricCurrent": "13873",
        "timeInstant": 1369878334000
    },
    {
        "id": 402,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6962",
        "reactivePower": "3824",
        "electricPotential": "193",
        "electricCurrent": "13907",
        "timeInstant": 1369879234000
    },
    {
        "id": 403,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6962",
        "reactivePower": "3831",
        "electricPotential": "190",
        "electricCurrent": "13907",
        "timeInstant": 1369880134000
    },
    {
        "id": 404,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6931",
        "reactivePower": "3660",
        "electricPotential": "190",
        "electricCurrent": "13821",
        "timeInstant": 1369881034000
    },
    {
        "id": 405,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7106",
        "reactivePower": "3660",
        "electricPotential": "190",
        "electricCurrent": "13682",
        "timeInstant": 1369881934000
    },
    {
        "id": 406,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7077",
        "reactivePower": "3824",
        "electricPotential": "193",
        "electricCurrent": "13925",
        "timeInstant": 1369882833000
    },
    {
        "id": 407,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7088",
        "reactivePower": "3740",
        "electricPotential": "192",
        "electricCurrent": "13873",
        "timeInstant": 1369883734000
    },
    {
        "id": 408,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7111",
        "reactivePower": "3871",
        "electricPotential": "192",
        "electricCurrent": "13942",
        "timeInstant": 1369884634000
    },
    {
        "id": 409,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6715",
        "reactivePower": "3871",
        "electricPotential": "192",
        "electricCurrent": "13960",
        "timeInstant": 1369885534000
    },
    {
        "id": 410,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6900",
        "reactivePower": "3428",
        "electricPotential": "187",
        "electricCurrent": "13426",
        "timeInstant": 1369886433000
    },
    {
        "id": 411,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7011",
        "reactivePower": "3582",
        "electricPotential": "190",
        "electricCurrent": "13561",
        "timeInstant": 1369887334000
    },
    {
        "id": 412,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6980",
        "reactivePower": "3710",
        "electricPotential": "191",
        "electricCurrent": "13787",
        "timeInstant": 1369888234000
    },
    {
        "id": 413,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6968",
        "reactivePower": "3685",
        "electricPotential": "191",
        "electricCurrent": "13701",
        "timeInstant": 1369890034000
    },
    {
        "id": 414,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7047",
        "reactivePower": "3563",
        "electricPotential": "191",
        "electricCurrent": "13614",
        "timeInstant": 1369890933000
    },
    {
        "id": 415,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6961",
        "reactivePower": "3710",
        "electricPotential": "192",
        "electricCurrent": "13770",
        "timeInstant": 1369891834000
    },
    {
        "id": 416,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "7089",
        "reactivePower": "3619",
        "electricPotential": "190",
        "electricCurrent": "13683",
        "timeInstant": 1369892734000
    },
    {
        "id": 417,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6974",
        "reactivePower": "3673",
        "electricPotential": "192",
        "electricCurrent": "13770",
        "timeInstant": 1369893633000
    },
    {
        "id": 418,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6998",
        "reactivePower": "3436",
        "electricPotential": "191",
        "electricCurrent": "13561",
        "timeInstant": 1369894533000
    },
    {
        "id": 419,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "6954",
        "reactivePower": "3571",
        "electricPotential": "191",
        "electricCurrent": "13648",
        "timeInstant": 1369895433000
    },
    {
        "id": 420,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "3684",
        "electricPotential": "192",
        "electricCurrent": "13595",
        "timeInstant": 1369896334000
    },
    {
        "id": 422,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "1",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369928845000
    },
    {
        "id": 423,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369928858000
    },
    {
        "id": 424,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369944034000
    },
    {
        "id": 425,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369944935000
    },
    {
        "id": 426,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369945833000
    },
    {
        "id": 427,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369946733000
    },
    {
        "id": 428,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369947633000
    },
    {
        "id": 429,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369948534000
    },
    {
        "id": 430,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369949433000
    },
    {
        "id": 431,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10088",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369950334000
    },
    {
        "id": 432,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6203",
        "electricPotential": "227",
        "electricCurrent": "17284",
        "timeInstant": 1369951233000
    },
    {
        "id": 433,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "5735",
        "electricPotential": "229",
        "electricCurrent": "17269",
        "timeInstant": 1369952133000
    },
    {
        "id": 434,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10450",
        "reactivePower": "5735",
        "electricPotential": "227",
        "electricCurrent": "17063",
        "timeInstant": 1369953034000
    },
    {
        "id": 435,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10439",
        "reactivePower": "6143",
        "electricPotential": "229",
        "electricCurrent": "17528",
        "timeInstant": 1369953934000
    },
    {
        "id": 436,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10529",
        "reactivePower": "6250",
        "electricPotential": "230",
        "electricCurrent": "17546",
        "timeInstant": 1369954834000
    },
    {
        "id": 437,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10546",
        "reactivePower": "6305",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1369955734000
    },
    {
        "id": 438,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1369993898000
    },
    {
        "id": 442,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370007190000
    },
    {
        "id": 446,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370030434000
    },
    {
        "id": 449,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370031333000
    },
    {
        "id": 452,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370032233000
    },
    {
        "id": 455,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370033134000
    },
    {
        "id": 458,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370034033000
    },
    {
        "id": 461,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370034934000
    },
    {
        "id": 464,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370035833000
    },
    {
        "id": 467,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10098",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370036734000
    },
    {
        "id": 470,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10461",
        "reactivePower": "6311",
        "electricPotential": "230",
        "electricCurrent": "17143",
        "timeInstant": 1370037633000
    },
    {
        "id": 473,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10377",
        "reactivePower": "5999",
        "electricPotential": "231",
        "electricCurrent": "17372",
        "timeInstant": 1370038534000
    },
    {
        "id": 476,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10395",
        "reactivePower": "5946",
        "electricPotential": "229",
        "electricCurrent": "17338",
        "timeInstant": 1370039434000
    },
    {
        "id": 479,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10389",
        "reactivePower": "6055",
        "electricPotential": "229",
        "electricCurrent": "17408",
        "timeInstant": 1370040333000
    },
    {
        "id": 482,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10606",
        "reactivePower": "6210",
        "electricPotential": "230",
        "electricCurrent": "17459",
        "timeInstant": 1370041233000
    },
    {
        "id": 485,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10481",
        "reactivePower": "6337",
        "electricPotential": "231",
        "electricCurrent": "17735",
        "timeInstant": 1370042133000
    },
    {
        "id": 488,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10517",
        "reactivePower": "6457",
        "electricPotential": "231",
        "electricCurrent": "17649",
        "timeInstant": 1370043034000
    },
    {
        "id": 491,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10576",
        "reactivePower": "6216",
        "electricPotential": "231",
        "electricCurrent": "17580",
        "timeInstant": 1370043933000
    },
    {
        "id": 494,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10594",
        "reactivePower": "6354",
        "electricPotential": "232",
        "electricCurrent": "17665",
        "timeInstant": 1370044833000
    },
    {
        "id": 497,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10522",
        "reactivePower": "6336",
        "electricPotential": "231",
        "electricCurrent": "17700",
        "timeInstant": 1370045734000
    },
    {
        "id": 500,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10468",
        "reactivePower": "6282",
        "electricPotential": "231",
        "electricCurrent": "17614",
        "timeInstant": 1370046633000
    },
    {
        "id": 503,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10407",
        "reactivePower": "6179",
        "electricPotential": "230",
        "electricCurrent": "17528",
        "timeInstant": 1370047534000
    },
    {
        "id": 506,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10493",
        "reactivePower": "5866",
        "electricPotential": "229",
        "electricCurrent": "17286",
        "timeInstant": 1370048434000
    },
    {
        "id": 509,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "6209",
        "electricPotential": "231",
        "electricCurrent": "17580",
        "timeInstant": 1370049334000
    },
    {
        "id": 512,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10330",
        "reactivePower": "5898",
        "electricPotential": "231",
        "electricCurrent": "17270",
        "timeInstant": 1370050234000
    },
    {
        "id": 515,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10612",
        "reactivePower": "6102",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1370051134000
    },
    {
        "id": 518,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10570",
        "reactivePower": "6319",
        "electricPotential": "231",
        "electricCurrent": "17648",
        "timeInstant": 1370052034000
    },
    {
        "id": 521,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "5962",
        "electricPotential": "231",
        "electricCurrent": "17493",
        "timeInstant": 1370052933000
    },
    {
        "id": 524,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10762",
        "reactivePower": "6354",
        "electricPotential": "233",
        "electricCurrent": "17804",
        "timeInstant": 1370053833000
    },
    {
        "id": 527,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10762",
        "reactivePower": "6421",
        "electricPotential": "233",
        "electricCurrent": "17804",
        "timeInstant": 1370054733000
    },
    {
        "id": 530,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10762",
        "reactivePower": "6238",
        "electricPotential": "234",
        "electricCurrent": "17717",
        "timeInstant": 1370055633000
    },
    {
        "id": 533,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10498",
        "reactivePower": "6238",
        "electricPotential": "231",
        "electricCurrent": "17596",
        "timeInstant": 1370056534000
    },
    {
        "id": 536,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10546",
        "reactivePower": "6185",
        "electricPotential": "231",
        "electricCurrent": "17509",
        "timeInstant": 1370057433000
    },
    {
        "id": 539,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "6132",
        "electricPotential": "231",
        "electricCurrent": "17545",
        "timeInstant": 1370058333000
    },
    {
        "id": 542,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10618",
        "reactivePower": "6258",
        "electricPotential": "233",
        "electricCurrent": "17734",
        "timeInstant": 1370059233000
    },
    {
        "id": 545,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10547",
        "reactivePower": "6258",
        "electricPotential": "232",
        "electricCurrent": "17648",
        "timeInstant": 1370060134000
    },
    {
        "id": 548,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10780",
        "reactivePower": "6025",
        "electricPotential": "232",
        "electricCurrent": "17358",
        "timeInstant": 1370061034000
    },
    {
        "id": 551,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10835",
        "reactivePower": "6342",
        "electricPotential": "233",
        "electricCurrent": "17787",
        "timeInstant": 1370061933000
    },
    {
        "id": 554,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10756",
        "reactivePower": "6414",
        "electricPotential": "234",
        "electricCurrent": "17908",
        "timeInstant": 1370062833000
    },
    {
        "id": 557,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10858",
        "reactivePower": "6433",
        "electricPotential": "234",
        "electricCurrent": "17804",
        "timeInstant": 1370063733000
    },
    {
        "id": 560,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10804",
        "reactivePower": "6228",
        "electricPotential": "234",
        "electricCurrent": "17820",
        "timeInstant": 1370064634000
    },
    {
        "id": 563,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10828",
        "reactivePower": "6271",
        "electricPotential": "233",
        "electricCurrent": "17770",
        "timeInstant": 1370065533000
    },
    {
        "id": 566,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10804",
        "reactivePower": "6107",
        "electricPotential": "233",
        "electricCurrent": "17682",
        "timeInstant": 1370066433000
    },
    {
        "id": 569,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10768",
        "reactivePower": "6451",
        "electricPotential": "234",
        "electricCurrent": "17786",
        "timeInstant": 1370067334000
    },
    {
        "id": 572,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6265",
        "electricPotential": "233",
        "electricCurrent": "17768",
        "timeInstant": 1370068234000
    },
    {
        "id": 575,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370069134000
    },
    {
        "id": 579,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370116834000
    },
    {
        "id": 580,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370117734000
    },
    {
        "id": 581,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370118633000
    },
    {
        "id": 582,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370119534000
    },
    {
        "id": 583,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370120434000
    },
    {
        "id": 584,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370121333000
    },
    {
        "id": 585,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370122233000
    },
    {
        "id": 586,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6684",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370123135000
    },
    {
        "id": 587,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10427",
        "reactivePower": "6684",
        "electricPotential": "230",
        "electricCurrent": "17663",
        "timeInstant": 1370124033000
    },
    {
        "id": 588,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10444",
        "reactivePower": "6173",
        "electricPotential": "230",
        "electricCurrent": "17494",
        "timeInstant": 1370124933000
    },
    {
        "id": 589,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10516",
        "reactivePower": "5693",
        "electricPotential": "229",
        "electricCurrent": "17218",
        "timeInstant": 1370125834000
    },
    {
        "id": 590,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10606",
        "reactivePower": "6102",
        "electricPotential": "231",
        "electricCurrent": "17476",
        "timeInstant": 1370126733000
    },
    {
        "id": 591,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10630",
        "reactivePower": "6000",
        "electricPotential": "232",
        "electricCurrent": "17511",
        "timeInstant": 1370127633000
    },
    {
        "id": 592,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10732",
        "reactivePower": "6072",
        "electricPotential": "231",
        "electricCurrent": "17528",
        "timeInstant": 1370128534000
    },
    {
        "id": 593,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10775",
        "reactivePower": "6132",
        "electricPotential": "232",
        "electricCurrent": "17683",
        "timeInstant": 1370129434000
    },
    {
        "id": 594,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10703",
        "reactivePower": "6366",
        "electricPotential": "233",
        "electricCurrent": "17821",
        "timeInstant": 1370130334000
    },
    {
        "id": 595,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10667",
        "reactivePower": "6218",
        "electricPotential": "234",
        "electricCurrent": "17583",
        "timeInstant": 1370131234000
    },
    {
        "id": 596,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10846",
        "reactivePower": "6481",
        "electricPotential": "233",
        "electricCurrent": "17771",
        "timeInstant": 1370132134000
    },
    {
        "id": 597,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10907",
        "reactivePower": "6210",
        "electricPotential": "233",
        "electricCurrent": "17803",
        "timeInstant": 1370133034000
    },
    {
        "id": 598,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10715",
        "reactivePower": "6456",
        "electricPotential": "234",
        "electricCurrent": "17993",
        "timeInstant": 1370133934000
    },
    {
        "id": 599,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10715",
        "reactivePower": "6475",
        "electricPotential": "233",
        "electricCurrent": "17752",
        "timeInstant": 1370134833000
    },
    {
        "id": 600,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10907",
        "reactivePower": "6475",
        "electricPotential": "233",
        "electricCurrent": "17924",
        "timeInstant": 1370135733000
    },
    {
        "id": 601,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11058",
        "reactivePower": "6505",
        "electricPotential": "234",
        "electricCurrent": "17959",
        "timeInstant": 1370136634000
    },
    {
        "id": 602,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11027",
        "reactivePower": "6516",
        "electricPotential": "235",
        "electricCurrent": "18080",
        "timeInstant": 1370137534000
    },
    {
        "id": 603,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10816",
        "reactivePower": "6631",
        "electricPotential": "235",
        "electricCurrent": "18199",
        "timeInstant": 1370138433000
    },
    {
        "id": 604,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10792",
        "reactivePower": "6492",
        "electricPotential": "233",
        "electricCurrent": "17958",
        "timeInstant": 1370139334000
    },
    {
        "id": 605,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6360",
        "electricPotential": "233",
        "electricCurrent": "17821",
        "timeInstant": 1370140234000
    },
    {
        "id": 606,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10534",
        "reactivePower": "6218",
        "electricPotential": "231",
        "electricCurrent": "17527",
        "timeInstant": 1370141133000
    },
    {
        "id": 607,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10570",
        "reactivePower": "6218",
        "electricPotential": "232",
        "electricCurrent": "17666",
        "timeInstant": 1370142033000
    },
    {
        "id": 608,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10624",
        "reactivePower": "6337",
        "electricPotential": "232",
        "electricCurrent": "17631",
        "timeInstant": 1370142934000
    },
    {
        "id": 609,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10721",
        "reactivePower": "5987",
        "electricPotential": "232",
        "electricCurrent": "17476",
        "timeInstant": 1370143833000
    },
    {
        "id": 610,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6309",
        "electricPotential": "234",
        "electricCurrent": "17635",
        "timeInstant": 1370144734000
    },
    {
        "id": 611,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "11093",
        "reactivePower": "5506",
        "electricPotential": "227",
        "electricCurrent": "17063",
        "timeInstant": 1370145634000
    },
    {
        "id": 612,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10961",
        "reactivePower": "6643",
        "electricPotential": "236",
        "electricCurrent": "18200",
        "timeInstant": 1370146534000
    },
    {
        "id": 613,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10695",
        "reactivePower": "6462",
        "electricPotential": "234",
        "electricCurrent": "17992",
        "timeInstant": 1370147433000
    },
    {
        "id": 614,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10932",
        "reactivePower": "6493",
        "electricPotential": "233",
        "electricCurrent": "17786",
        "timeInstant": 1370148334000
    },
    {
        "id": 615,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10654",
        "reactivePower": "6469",
        "electricPotential": "235",
        "electricCurrent": "18011",
        "timeInstant": 1370149234000
    },
    {
        "id": 616,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10900",
        "reactivePower": "6290",
        "electricPotential": "232",
        "electricCurrent": "17650",
        "timeInstant": 1370150133000
    },
    {
        "id": 617,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10900",
        "reactivePower": "6211",
        "electricPotential": "234",
        "electricCurrent": "17820",
        "timeInstant": 1370151033000
    },
    {
        "id": 618,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10632",
        "reactivePower": "6211",
        "electricPotential": "232",
        "electricCurrent": "17666",
        "timeInstant": 1370151934000
    },
    {
        "id": 619,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10869",
        "reactivePower": "5888",
        "electricPotential": "232",
        "electricCurrent": "17359",
        "timeInstant": 1370152834000
    },
    {
        "id": 620,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10884",
        "reactivePower": "6409",
        "electricPotential": "235",
        "electricCurrent": "17872",
        "timeInstant": 1370153733000
    },
    {
        "id": 621,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "6319",
        "electricPotential": "234",
        "electricCurrent": "17857",
        "timeInstant": 1370154634000
    },
    {
        "id": 622,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370155533000
    },
    {
        "id": 624,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370203233000
    },
    {
        "id": 625,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370204133000
    },
    {
        "id": 626,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370205034000
    },
    {
        "id": 627,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370205934000
    },
    {
        "id": 628,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370206833000
    },
    {
        "id": 629,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370207734000
    },
    {
        "id": 630,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370208633000
    },
    {
        "id": 631,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10215",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370209533000
    },
    {
        "id": 632,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10252",
        "reactivePower": "6401",
        "electricPotential": "229",
        "electricCurrent": "17507",
        "timeInstant": 1370210434000
    },
    {
        "id": 633,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "5886",
        "electricPotential": "228",
        "electricCurrent": "17236",
        "timeInstant": 1370211334000
    },
    {
        "id": 634,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10324",
        "reactivePower": "5879",
        "electricPotential": "229",
        "electricCurrent": "17393",
        "timeInstant": 1370212233000
    },
    {
        "id": 635,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10505",
        "reactivePower": "5879",
        "electricPotential": "230",
        "electricCurrent": "17287",
        "timeInstant": 1370213134000
    },
    {
        "id": 636,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10648",
        "reactivePower": "6446",
        "electricPotential": "231",
        "electricCurrent": "17649",
        "timeInstant": 1370214034000
    },
    {
        "id": 637,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10703",
        "reactivePower": "6121",
        "electricPotential": "232",
        "electricCurrent": "17649",
        "timeInstant": 1370214934000
    },
    {
        "id": 638,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10883",
        "reactivePower": "5951",
        "electricPotential": "231",
        "electricCurrent": "17613",
        "timeInstant": 1370215834000
    },
    {
        "id": 639,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10883",
        "reactivePower": "6386",
        "electricPotential": "233",
        "electricCurrent": "17872",
        "timeInstant": 1370216733000
    },
    {
        "id": 640,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10768",
        "reactivePower": "6386",
        "electricPotential": "232",
        "electricCurrent": "17597",
        "timeInstant": 1370217634000
    },
    {
        "id": 641,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10817",
        "reactivePower": "6294",
        "electricPotential": "234",
        "electricCurrent": "17785",
        "timeInstant": 1370218533000
    },
    {
        "id": 642,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10930",
        "reactivePower": "6313",
        "electricPotential": "234",
        "electricCurrent": "17803",
        "timeInstant": 1370219434000
    },
    {
        "id": 643,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10714",
        "reactivePower": "6362",
        "electricPotential": "234",
        "electricCurrent": "17907",
        "timeInstant": 1370220334000
    },
    {
        "id": 644,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10264",
        "reactivePower": "6343",
        "electricPotential": "234",
        "electricCurrent": "17700",
        "timeInstant": 1370221233000
    },
    {
        "id": 645,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10587",
        "reactivePower": "6132",
        "electricPotential": "229",
        "electricCurrent": "17252",
        "timeInstant": 1370222133000
    },
    {
        "id": 648,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10587",
        "reactivePower": "0",
        "electricPotential": "232",
        "electricCurrent": "17510",
        "timeInstant": 1370289634000
    },
    {
        "id": 649,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "232",
        "electricCurrent": "0",
        "timeInstant": 1370290533000
    },
    {
        "id": 650,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370291434000
    },
    {
        "id": 651,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370292334000
    },
    {
        "id": 652,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370293234000
    },
    {
        "id": 653,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "0",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370294133000
    },
    {
        "id": 654,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10463",
        "reactivePower": "0",
        "electricPotential": "0",
        "electricCurrent": "0",
        "timeInstant": 1370295934000
    },
    {
        "id": 655,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10463",
        "reactivePower": "3891",
        "electricPotential": "230",
        "electricCurrent": "17477",
        "timeInstant": 1370296833000
    },
    {
        "id": 656,
        "regId": "OUTSMART.RG_LAS_LLAMAS_01",
        "activePower": "10403",
        "reactivePower": "3891",
        "electricPotential": "192",
        "electricCurrent": "14030",
        "timeInstant": 1370297733000
    }
];
