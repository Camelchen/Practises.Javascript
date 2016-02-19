///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

var p = document.createElement("p");
p.innerHTML = "Here is append text for "+GetCurrentFile().FileName;
document.getElementById(GetCurrentFile().FileNameWithoutExt).appendChild(p);

var myArray = [
    {
        "display": "JavaScript Tutorial",
        "url": "http://www.w3schools.com/js/default.asp"
    },
    {
        "display": "HTML Tutorial",
        "url": "http://www.w3schools.com/html/default.asp"
    },
    {
        "display": "CSS Tutorial",
        "url": "http://www.w3schools.com/css/default.asp"
    }
];


var id01 = document.createElement("p");
id01.id = "id01";
id01.innerHTML = "Here is " + id01.id;
document.getElementById(GetCurrentFile().FileNameWithoutExt).appendChild(id01);


myFunction(myArray);


var xmlhttp = new XMLHttpRequest();
var url = "../Content/Resources/JSON.myTutorials.txt";

document.getElementById("id01").innerHTML += '<a href="' + url + '">file url</a>';

var id02 = document.createElement("p");
id02.id = "id02";
document.getElementById(GetCurrentFile().FileNameWithoutExt).appendChild(id02);

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr,"id02");
    }
}

xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(arr, elId) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a>' + '<br>';
    }

    if (elId === undefined) {
        elId = "id01";
    }

    document.getElementById(elId).innerHTML += '<br>' + out;
}