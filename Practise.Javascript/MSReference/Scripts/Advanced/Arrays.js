ShowHeader();

var entryNum = 5;

sample = new Array();

sample[1] = "Maple Street";
sample[entryNum] = "25";

ShowOutput(sample[1]);
ShowOutput(sample[entryNum]);

//property array

ShowOutput("//property array");
sample["a"] = "test1";
sample["b"] = "test3";
sample["c"] = "test4";

for (var s in sample) {
    ShowOutput(s + " : " + sample[s]);
}


var obj = {
    a: undefined,
    b: null,
    c: false
};

// a, b, c all found
for (var prop in obj) {
    ShowOutput("Object1: " + prop);
}

function Class() {
    this.a = undefined;
    this.b = null;
    this.c = false;
}

Class.prototype = {
    a: undefined,
    b: true,
    c: true,
    d: true,
    e: true
};

var obj2 = new Class();

// a, b, c, d, e found
for (var prop in obj2) {
    ShowOutput("Object2: " + prop + " = " + obj2[prop]);
}


for (var prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
        ShowOutput("Object2 hasOwn: " + prop + " = "+obj2[prop]);
    }
}


//typed arrays
var name = "http://www.microsoft.com";
var xhrDiv = document.getElementById("meControlDropdown");

var req = new XMLHttpRequest();
req.open("GET", name, true);
req.responseType = "arraybuffer";
req.onreadystatechange=function() {
    if (req.readyState == req.DONE) {
        var arrayResponse = req.response;
        var dataView = new DataView(arrayResponse);
        var ints = new Uint32Array(dataView.byteLength / 4);

        xhrDiv.style.backgroundColor = "red";
        xhrDiv.innerText = "Array is " + ints.length + "uints long";
    }
}