ShowHeader(0);


var textDiv = document.getElementById("textDiv");
var nestedDiv = document.getElementById("nestedDiv");

//textDiv.innerHTML = "write my text by javascript.";
nestedDiv.textContent = "here is nested div";

var startTime = new Date();

var myTimer = setInterval(function() { showTime(startTime); }, 1000);

function showTime(st) {
    var now = new Date();
    var timerDiv = document.getElementById("timerDiv");
    if (Math.floor((st.getTime() + 30 * 1000 - now.getTime()) / 1000) >= 0) {
        timerDiv.innerHTML = "Start time: " + st + "<br>" + "Timer: " + Math.floor((st.getTime() + 30 * 1000 - now.getTime()) / 1000);
    }
    
}




































ShowTailer();