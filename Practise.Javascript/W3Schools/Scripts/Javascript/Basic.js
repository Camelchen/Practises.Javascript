///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();


function tryCatch() {
    var input = document.getElementById("js-demo-trycatch-input").value;
    document.getElementById("js-demo-trycatch-result").innerHTML = "";
    try {
        if (input === "") throw "empty";
        if (isNaN(input)) {
            throw "not a number";
        }
        if (input < 5) {
            throw "too low";
        }
        if (input > 10) {
            throw "too high";
        }
    } catch (e) {
        document.getElementById("js-demo-trycatch-result").innerHTML = "input is " + e;
    } finally {
        document.getElementById("js-demo-trycatch-input").innerHTML = "";
    }
}

function loopArray() {
    var result="";
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    for (var i = 0; i < fruits.length; i++) {
        result += "<li>" + fruits[i] + "</li>";
    }
    document.getElementById("js-demo-array-result").innerHTML =  result;
}


var date = new Date();
//console.log(date);
date.setDate(12);
//console.log(date);



function randomNumber(flag) {

    if (flag === 'start') {
        document.getElementById("js-demo-math-random-btn").innerHTML = "Random Stop!";
        document.getElementById("js-demo-math-random-btn").setAttribute("onClick", "randomNumber('end')");
        document.getElementById("js-demo-math-random").innerHTML = Math.random();
        setTimeout(function () {
            if (document.getElementById("js-demo-math-random-btn").getAttribute("onClick").indexOf('end') > 0) {
                randomNumber('start');
            }
        }, 500);
    }

    if (flag === 'end') {
        document.getElementById("js-demo-math-random-btn").innerHTML = "Random Start!";
        document.getElementById("js-demo-math-random-btn").setAttribute("onClick", "randomNumber('start')");
        document.getElementById("js-demo-math-random").innerHTML = "Stop!";
    }
}

function splitString() {

    var o = document.getElementById("js-demo-string-split-input").value.split(",");
    document.getElementById("js-demo-string-split-output").innerHTML = "";
    for (var i = 0; i < o.length; i++) {
        if (o[i].value !== "")
        {
            document.getElementById("js-demo-string-split-output").innerHTML += "<ol>"+o[i] + "</ol>";
        }
    }


}

function introInput() {
    var inputValue, text;
    inputValue = document.getElementById("js-intro-input").value;
    if (inputValue > 0 && inputValue < 10 && inputValue!==undefined) {
        text = "Input OK";
    } else {
        text = "Input not valid";
    }
    document.getElementById("js-intro-input-result").innerHTML = text;
}

function changeStyle() {
    var x = document.getElementById("js-intro-style");
    x.style.color = "red";
}


function switchBulb() {
    var image = document.getElementById("js-intro-bulb");

   // console.log(image.src);
   // console.log(image.src.indexOf("bulbon"));

    if (image.src.indexOf("bulbon") > 0) {
        image.src = image.src.replace("bulbon", "bulboff");
    } else {
        image.src = image.src.replace("bulboff", "bulbon");
    }
    //console.log(image.src);
}