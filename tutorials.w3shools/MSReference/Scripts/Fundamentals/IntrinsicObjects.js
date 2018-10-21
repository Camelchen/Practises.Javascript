ShowHeader();

var theMonths = new Array(12);
theMonths[0] = "Jan";
theMonths[1] = "Feb";
theMonths[2] = "Mar";
theMonths[3] = "Apr";
theMonths[4] = "May";
theMonths[5] = "Jun";
theMonths[6] = "Jul";
theMonths[7] = "Aug";
theMonths[8] = "Sep";
theMonths[9] = "Oct";
theMonths[10] = "Nov";
theMonths[11] = "Dec";

var theMonths2 = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

document.write(theMonths);
document.write(theMonths2);
document.write("<br/>");

//string object
var aString = "0123456789";

document.write(aString.substring(4, 7));
document.write(aString.substring(7, 4));

document.write(aString[5].substring(0, 1));
document.write("<br/>");

//date object
var toDay = new Date();
var thisYear = toDay.getFullYear();
var thisMonth = theMonths[toDay.getMonth()];
var thisDay = thisMonth + " " + toDay.getDate() + ", " + thisYear;

document.write(toDay);
document.write(thisDay);
document.write("<br/>");


//create object
var pasta = new Object();
pasta.grain = "wheat";
pasta.width = 0.5;
pasta.shape = "round";
pasta.getShape = function () {
    return this.shape;
}

document.write(pasta.grain);
document.write("<br/>");
document.write(pasta.getShape());
document.write("<br/>");

var key = 'a';
var value = 5;

var obj1 = {
    key: key,
    value: value
};

document.write(obj1);
document.write("<br/>");

//method of object
var mObj = {
    method1: function () {
        document.write("this is method1.");
        document.write("<br/>");
    },
    method2: function () {
        document.write("this is method2.");
        document.write("<br/>");
    }
}

mObj.method1();
mObj.method2();


//object dynamically
var propName = "prop_42";

var obj = {
    value: 0,
    set [propName](v) {
        this.value=v;
        document.write("here is set.");
        document.write("<br/>");
    }
}

document.write(obj.value);
document.write("<br/>");
obj.prop_42 = 777;
document.write(obj.value);
document.write("<br/>");






ShowTailer();