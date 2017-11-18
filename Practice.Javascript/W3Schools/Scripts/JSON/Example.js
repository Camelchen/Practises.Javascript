///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

var h1 = document.createElement("h1");
h1.id = "JSON-Example-h1";
h1.innerHTML = "Customers";
document.getElementById(getCurrentFile().FileNameWithoutExt).appendChild(h1);

var div = document.createElement("div");
div.id = "JSON-Example-div01";
div.innerHTML = "div01";
document.getElementById(getCurrentFile().FileNameWithoutExt).appendChild(div);


var PHPXmlhttp = new XMLHttpRequest();
var PHPUrl = "http://www.w3schools.com/website/Customers_MYSQL.php";

PHPXmlhttp.onreadystatechange = function () {

    if (PHPXmlhttp.readyState === 4 && PHPXmlhttp.status === 200) {
        console.log("load succ");
        PHPMyFunction(PHPXmlhttp.responseText, "JSON-Example-div01");
    }

}

PHPXmlhttp.open("GET", PHPUrl, true);
PHPXmlhttp.send();



function PHPMyFunction(response,parentId) {
    var arr = JSON.parse(response);
    var i;
    var out = '<table id ="JSON-Example-table">';

    for (i = 0; i < arr.length; i++) {
        out += "<tr><td>" + arr[i].Name + "</td><td>" + arr[i].City + "</td><td>" + arr[i].Country + "</td></tr>";
    }
    out += "</table>";
    document.getElementById(parentId).innerHTML += '<br>' + out;
}