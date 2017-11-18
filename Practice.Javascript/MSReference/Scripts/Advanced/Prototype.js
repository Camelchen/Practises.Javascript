ShowHeader();

function Vehicle(wheels,engine) {
    this.wheels = wheels;
    this.engine = engine;
}

//prototypes
var testVehicle = new Vehicle(2, false);
Vehicle.prototype.color = "red";
var testColor = testVehicle.color;

var newVehicle = new Vehicle(3, true);

ShowOutput(testVehicle.color + " , " + newVehicle.color);


//trim

function ZString(s) {
    var zString = new String(s);
    return zString;
}

ZString.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}



var s = new ZString("    leading and trailing spaces    ");
ShowOutput("before trim: " + s + "(" + s.length + ")");

s = s.trim();
ShowOutput("after trim: " + s + "(" + s.length + ")");




//derive object
var Bicycle = Object.create(Object.getPrototypeOf(Vehicle), {
    "pedals": { value: true }
});



//change object's prototype
function Friend() {
    this.demeanor = "happy";
}

function Foe() {
    this.demeanor = "suspicious";
}

var friend = new Friend();
var foe = new Foe();

var player = new Object();
player.__proto__ = foe;



ShowOutput(player.demeanor);

friend.ally = "Tom";



player.__proto__ = friend;

player.demeanor = "changed";
player.__proto__ = foe;
