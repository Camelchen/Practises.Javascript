///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();


//map
var m = new Map();
m.set(1, "black");
m.set(2, "red");
m.set("colors", 2);
m.set({ x: 1 }, 3);

ShowOutput(m.get(2));

m.forEach(function (value,key,mapObj) {
    ShowOutput(value + " , " + key);
});

//weakmap
var s = new Set();
s.add("Thomas");
s.add(1776);
s.add("founding");

s.forEach(function(value) {
    ShowOutput(value, s);
});


