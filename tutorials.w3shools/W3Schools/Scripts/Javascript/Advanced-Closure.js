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

function sayAlice() {
    var say = function () {
        ShowOutput(alice);
    }
    var alice = "hello alice";
    return say;
}

sayAlice()();

ShowOutput("example 7", lineMark.comment);


function newClosure(someNum,someRef) {
    var num = someNum;
    var anArray = [1, 2, 3];
    var ref = someRef;
    return function(x) {
        num += x;
        anArray.push(num);
        ShowOutput('num: ' + num +
            '\nanArray ' + anArray.toString() +
            '\nref.someVar ' + ref.someVar);
    }
}

obj = { someVar: 4 };
fn1 = newClosure(4, obj);
fn2 = newClosure(5, obj);
fn1(1);
fn2(1);
obj.someVar++;
fn1(2);
fn1(2);
fn2(2);

ShowOutput("example 8", lineMark.comment);

function foo(x) {
    var tmp = 3;

    function bar(y) {
        ShowOutput(x + y + (++tmp));
    }

    bar(10);
}
foo(2);
foo2(2)(9);

ShowOutput("example 9", lineMark.comment);

function foo2(x) {
    var tmp = 3;

    return function (y) {
        ShowOutput(x + y + (++tmp));
    }
}

var bar = foo2(3);
bar(10);
bar(10);

ShowOutput("example 10", lineMark.comment);

function foo3(x) {
    var tmp = 3;
    return function (y) {
        ShowOutput(x + y + tmp);
        x.memb = x.memb ? x.memb + 1 : 1;
        ShowOutput(x.memb);
    }
}

var age = new Number(2);
var bar = foo3(age);
bar(10);
bar(10);


var funcs = [];
for (var i = 0; i < 3; i++) {          // let's create 3 functions
    funcs[i] = function (i) {            // and store them in funcs
        ShowOutput("My value: " + i); // each should log its value.
    };
}
for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}


var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (index) {
        return function () {
            ShowOutput("My value: " + index);
        };
    }(i));
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}