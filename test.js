var yourObj = {

    "pattern2": "^[ ]*|[ a-zA-Z0-9\\-\\.\\?\\,\\\:\\'\\/\\\\\\+\=&amp;%\\$\#_\\!\\~\\@\\%\\(\\)\\{\\}\\[\\]\\;\\*\"\\Â\\®]+$",
    "pattern1": "^[A-Za-z0-9]+$"
};


function recursiveGetProp(obj, lookup, callback) {
    for (property in obj) {
        if (property == lookup) {
            callback(obj[property]);
        } else if (obj[property] instanceof Object) {
            recursiveGetProp(obj[property], lookup, callback);
        }
    }
}

var allItems = [];

function handleClick() {

    allItems = [];
    var inputObj = document.getElementById("message").value;

    if (inputObj.indexOf('pattern') === -1) {
        var jsonObj = {};
        jsonObj['pattern'] = inputObj.trim();
        inputObj = jsonObj;
    } else {
        inputObj = JSON.parse(inputObj);
    }
    alert(JSON.stringify(inputObj));

    recursiveGetProp(inputObj, 'pattern', function(regex) {
        //alert(regex);
        allItems.push("-----regex----------" + regex);
        var attackArr = attackList;


        var arrayLength = attackArr.length;

        for (var i = 0; i < arrayLength; i++) {

            var attackPayload = attackArr[i].split(':::');
            var attack = attackPayload[0];
            //alert(attack);

            var f = new RegExp(regex, 'i');

            var hit = f.exec(attack);
            if (hit) {
                allItems.push(attack);

            }
        }

    });

    alert("Found these bad pattern pass through:\n" + JSON.stringify(allItems, null, 2));

}