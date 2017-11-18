ShowHeader();

//function variable
var aCentaur = "a horse with rider,";

function antiquities() {

    var aCentaur = "A centaur is probably a mounted Scythian warrior";
    ShowOutput(aCentaur);
}

antiquities();

aCentaur += " as seen from a distance by a naive innocent.";

ShowOutput(aCentaur);

//undefined
var aNumber = 100;
tweak();

function tweak() {
    ShowOutput(aNumber);

    if (false) {
        var aNumber = 123;
    }
}


function send(name) {
    return function () {
        sendHi(name);
    }
}

function sendHi(msg) {
    ShowOutput("Hello" + msg);
}

var func = send("Bill");
func();

sendHi("Peter");
func();

//block-scoped

var x = 10;
var y = 10;
{
    var x = 5;
    var y = 5;
    {
        var x = 2;
        var y = 2;
        document.write(x);
        document.write(y);
    }
    document.write(x);
    document.write(y);
}
document.write(x);
document.write(y);
ShowOutput();


//update variable
function Clobber(param) {
    param = new Object();
    param.message = "This will not work";
}

function Update(param) {
    param.message = "I was changed";
}

var obj = new Object();
obj.message = "This is the original";

Clobber(obj);
ShowOutput(obj.message);

Update(obj);
ShowOutput(obj.message);