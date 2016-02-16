﻿///<reference path="~/Scripts/Common/Common.js" />
ShowHeader(0);


//json
ShowOutput("Here is debug info in script.");

var text = '{"name":"John","street":"montreal","phone":"514 1234567"}';

var obj = JSON.parse(text);
console.dir(obj);

document.getElementById("demo").innerHTML += "&nbsp &nbsp &nbsp" + obj.name + ", " + obj.street + ", " + obj.phone;

//bind
var data;

function DataObject() {
    this.name = "Data Object";
    this.data = function () {
        return data;
    }
    this.onDataCompleted = dataReadyHandler;
}

function dataReadyHandler() {
    if (console && console.log) {
        console.log("Data object property value(name): ", this.name);
        console.log("Data object property value(data): ", this.data());
    }
}

setTimeout(function() {
    data = [0, 1, 2, 3];
    document.dispatchEvent(dataReadyHandler);
}, 5000);


var data = new DataObject();
