///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();


//change font size
function changeSizer(fontSize) {
    document.body.style.fontSize = fontSize + 'px';
}

//prototype chain
function Being() {
    this.living = true;
}
Being.prototype.breathes = function () {
    return 'here is real breathes';
}

Robert.prototype = new Being;

function Robert() {
    this.living = false;
}
Robert.prototype.fakeBreathes = function () {
    return "cannot breathes, fake it";
}
var me = new Robert();
//console.log("~~~Prototype chain");
//console.log(me.living);
//console.log(me.fakeBreathes());
//console.log(me.breathes());


// Constructor
function Kid(name) {
    // Private
    var idol = "Paris Hilton";
    this.getIdol = function () {
        return idol;
    };

    //public
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}


var kenny = new Kid("Kenny");
//console.log("~~~Constructor");
//console.log(kenny.getIdol());
//console.log(kenny.getName());




//form
var personCN = new person("John", "Doe", 23, "green");

//create new DOM
var newElement = document.createElement("p");
newElement.id = "js-adv-om-oldName";
newElement.innerHTML = "old name is " + personCN.lastName;
document.getElementById(getCurrentFile().FileNameWithoutExt).appendChild(newElement);


function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (newName) {
        this.lastName = newName;
    }
}

function changeName(newName) {
    personCN.changeName(newName);
    document.getElementById("js-adv-om-newName").innerHTML = "new name is " + personCN.lastName;
}

function formValidate() {
    var input = document.getElementById("js-adv-formvalidate-input");
    document.getElementById("js-adv-formvalidate-output").innerHTML = "";
    if (!input.checkValidity()) {
        document.getElementById("js-adv-formvalidate-output").innerHTML = input.validationMessage;
    }

}