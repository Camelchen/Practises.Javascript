ShowHeader();

var x;

// This method works.
if (x == undefined) {
    document.write("comparing x to undefined <br/>");
}
// This method doesn't work - you must check for the string "undefined".
if (typeof(x) == undefined) {
    document.write("comparing the type of x to undefined <br/>");
}
// This method does work. 
if (typeof(x) == "undefined") {
    document.write("comparing the type of x to the string 'undefined'");
}


ShowTailer()