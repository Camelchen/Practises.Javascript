ShowHeader();


var data;
var dataObj;

var dataReadyEvent = document.createEvent("Event");
dataReadyEvent.initEvent("dataReady", true, false);

function DataObject() {
    this.name = "Data Object";
    this.data = function () {
        return data;
    }

    this.onDataCompleted = dataReady;
    this.handlerRef = this.onDataCompleted.bind(this);
    document.addEventListener("dataReady", this.handlerRef);
}

function dataReady() {
    if (console && console.log) {
        console.log("object value(name): ", this.name);
        console.log("object value(data): ", this.data());
    }
}

setTimeout(function () {
    data = [0, 1, 2, 3];
    document.dispatchEvent(dataReadyEvent);
}, 1000);

function dataObjFactory() {
    for (var x = 0; x < 100; x++) {
        if (dataObj) {
            document.removeEventListener("dataReady", dataObj.onDataCompleted);
            dataObj = null;
        }
        dataObj = new DataObject();
    }
}

dataObjFactory();
