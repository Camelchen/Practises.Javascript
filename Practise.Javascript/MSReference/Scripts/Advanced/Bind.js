///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

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
        console.log("Data object property value: " + this.name);
        console.log("Data object property value: " + this.data(), s);
    }
}

setTimeout(function() {
    data = [0, 1, 2, 3];
    document.dispatchEvent(dataReadyEvent);
}, 5000);


var dataObj = new DataObject();