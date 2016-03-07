///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

function foo(count) {
    var funcs = [];
    for (var i = 0; i < count; i++) {
        funcs.push(function () {
            console.log('>>> ' + i);
        })
    }
    return funcs;
}

var funcs = foo(3);
console.dir(funcs);
for (var j = 0; j < funcs.length; j++) {
    funcs[j]();
}



var personCN = new person("John", "Doe", 23, "green");
document.getElementById("js-adv-om-oldName").innerHTML = "old name is "+personCN.lastName;


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