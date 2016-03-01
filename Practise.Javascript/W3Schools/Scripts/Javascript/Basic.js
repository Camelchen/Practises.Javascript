///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

function randomNumber() {
    document.getElementById("js-demo-math-random").innerHTML = Math.random()
    setTimeout(function () {
        randomNumber();
    }, 500)
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