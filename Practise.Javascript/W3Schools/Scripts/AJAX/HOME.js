///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("HOME-demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "Content/Resources/AJAX.ajax_info.txt", true);
    xhttp.send();
}


function loadJSONDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("HOME-demo-JSON").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "/JSON/ViewJSON", true);
    xhttp.send();
}

function loadXMLDoc() {
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState==4 && xhttp.status==200) {
            xmlDoc = xhttp.responseXML;
            txt = "";

        }

    }
}