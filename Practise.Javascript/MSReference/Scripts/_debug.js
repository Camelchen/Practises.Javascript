///<reference path="~/Scripts/Common/Common.js" />
ShowHeader(0);


//json
ShowOutput("this is debug info.");

var text = '{"name":"John","street":"montreal","phone":"514 1234567"}';

var obj = JSON.parse(text);
console.dir(obj);

document.getElementById('demo').innerHTML = obj.name + obj.street + obj.phone;


//bind
var data;

var dataReadyEvent = document.createEvent("Event");
dataReadyEvent.initEvent("dataReady", true, false);

function DataObject() {
    this.name = "Data Object";
    this.data = function () {
        return data;
    }

    this.onDataCompleted = dataReadyHandler;
    document.addEventListener("dataReady", this.onDataCompleted.bind(this));

}

function dataReadyHandler() {
    if (console && console.log) {
        console.log("Data object property value(name): " + this.name);
        console.log("Data object property value(data): " + this.data());
    }
}

setTimeout(function() {
    data = [0, 1, 2, 3];
    document.dispatchEvent(dataReadyEvent);
}, 5000);


var dataObj = new DataObject();