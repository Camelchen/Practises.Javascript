///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

ShowOutput("example 1", lineMark.comment);
function sayHello(name) {
    var text = "Hello" + name;
    var say = function () {
        ShowOutput(text);
    }
    say();
}


ShowOutput("example 2", lineMark.comment);
function sayHello2(name) {
    var text = "Hello " + name;
    var say = function () {
        ShowOutput(text);
    }
    return say;
}

var say2 = sayHello2("test");
say2();

ShowOutput("example 3", lineMark.comment);
function say677() {
    var num = 666;
    var say = function () {
        ShowOutput(num);
    }
    num++;
    return say;
}

var sayNumber = say677();
sayNumber();


ShowOutput("example 4", lineMark.comment);

var gLogNumber, gIncreaseNumber, gSetNumber;

function setupSomeGlobals() {
    var num = 666;
    gLogNumber = function () { ShowOutput(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber();
gSetNumber(5);
gLogNumber();

var oldLog = gLogNumber;
setupSomeGlobals();
gLogNumber();
oldLog();


ShowOutput("example 5", lineMark.comment);
function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = "item" + i;
        result.push(function () { ShowOutput(item + " " + list[i]) });
    }
    return result;
}

function testList() {
    var fnlist = buildList([1, 2, 3]);
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();

ShowOutput("example 6", lineMark.comment);







