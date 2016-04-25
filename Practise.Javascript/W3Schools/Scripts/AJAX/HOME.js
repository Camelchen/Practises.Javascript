///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

//load txt
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("HOME-demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "../Content/Resources/AJAX.ajax_info.txt", true);
    xhttp.send();
}

//load json
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

//load xml
function loadXMLDoc() {
    var xhttp, xmlDoc, txt, x, i;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            xmlDoc = xhttp.responseXML;
            txt = "";
            x = xmlDoc.getElementsByTagName("ARTIST");
            for (i = 0; i < x.length; i++) {
                txt = txt + x[i].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("HOME-demo-XML").innerHTML = txt;
        }
    };
    xhttp.open("GET", "../Content/Resources/AJAX.cd_catalog.xml", true);
    xhttp.send();
}


//switch
function SwitchDoc(url,callFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callFunc(xhttp);
        }
    };
    xhttp.open("GET", "../Content/Resources/"+url, true);
    xhttp.send();
}

function SwitchShow(HttpReq) {
    document.getElementById("HOME-demo-Switch").innerHTML = HttpReq.responseText;
}




//for search
function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState ==4 && xmlhttp.status==200) {
                document.getElementById("sp-select-list").innerHTML = xmlhttp.responseText;
                document.getElementById("search-result").innerHTML = loadHighlight(xmlhttp.responseText, document.getElementById("search-box").value);
            }
        }
        xmlhttp.open("GET", "GetHint?query=" + str, true);
        xmlhttp.send();
    }
}

//show sp
function showSP() {

    var query = document.getElementById("search-box").value;
    var spName = document.getElementById("sp-select-list").value;

    document.getElementById("SP-Content").innerHTML = "Here is the content of " + loadHighlight(spName,query);
}

function loadHighlight(originS, lighter) {
    var query = lighter.split(" ");
    var hlString = originS.replace(/<(?:.|\n)*?>/gm, '');
    for (var i = 0; i < query.length; i++) {
        if (query[i] !== "" && originS.toLowerCase().indexOf(query[i].toLowerCase())>0) {
            var oldValue = originS.substr(originS.toLowerCase().indexOf(query[i].toLowerCase()), query[i].length) ;
            console.log(oldValue);
            hlString = hlString.replace(oldValue, "<span class='search-highlight'>" + oldValue + "</span>");
        }
    }

    return hlString;
}


//cookies
function showAllCookies() {

    document.getElementById("current-cookies").innerHTML = "";

    var curCookies = document.cookie.split(";");

    //for (var i = 0; i < curCookies.length; i++) {
    //    var c = curCookies[i];
    //    document.getElementById("current-cookies").innerHTML += c;
    //}

    document.getElementById("current-cookies").innerHTML = curCookies;

}

function clearAllCookies() {
    
    var curCookies = document.cookie.split(";");
    for (var i = 0; i < curCookies.length; i++) {
        delCookie(curCookies[i].split("=")[0]);
    }

    showAllCookies();
}

function addCookie(cookieKey, cookieValue, exMinutes) {

    if (cookieKey === "") {
        window.alert("the name of cookie is EMPTY!!");
        return;
    }

    if (exMinutes === undefined) {
        exMinutes = 1;
    }
    
    var d = new Date();
    d.setTime(d.getTime() + (exMinutes * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires + ";path=/";

    showAllCookies();
}

function delCookie(cookieKey) {
    var d = new Date();
    d.setTime(d.getTime() - (1 * 24 * 3600 * 1000));//expire day is one day before.
    document.cookie = cookieKey + "=;expires = " + d.toUTCString();

    showAllCookies();
}