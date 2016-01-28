ShowHeader();


//current date
var dt = new Date();

var month = dt.getMonth() + 1;
var day = dt.getDate();
var year = dt.getFullYear();

document.write(month + "-" + day + "-" + year);
document.write("<br/>");

//specific Date

var dt = new Date("8/23/2009");
document.write(dt);
document.write("<br/>");

var dtA = new Date("8/24/2009 14:55:10");

var dtB = new Date(2009, 7, 12, 13, 42, 44);

document.write(dtA); document.write("<br/>");
document.write(dtB); document.write("<br/>");

dtB.setMonth(dtB.getMonth() + 1);
document.write(dtB); document.write("<br/>");


//week

var myDate = new Date();

myDate.setHours(0, 0, 0, 0);
myDate.setYear(2016);
myDate.setMonth(10);    //it's november, startMonth is 0.
myDate.setDate(1);

while (myDate.getDay()!==4) {
    myDate.setDate(myDate.getDate() + 1);
}

document.write("calc: "+myDate); document.write("<br/>");
myDate.setDate(myDate.getDate() + 21);
document.write("the thanksgiving day is: " + myDate); document.write("<br/>");

//elapsed time

var startTime = new Date("1/1/1900");
var startMsec = startTime.getMilliseconds();
startTime.setTime(5000000);
var elapsed = (startTime.getTime() - startMsec) / 1000;
document.write(elapsed); document.write("<br/>");


//interval elapsed time

var date = Date.now();
var firstDate = new Date("1/1/2016");
var firstDateMsec = firstDate.getTime();

var interval = date - firstDateMsec;

var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;

var days = Math.floor(interval / msecPerDay);
interval = interval - days * msecPerDay;

var hours = Math.floor(interval / msecPerHour);
interval = interval - hours * msecPerHour;

var minutes = Math.floor(interval / msecPerMinute);
interval = interval - minutes * msecPerMinute;

var seconds = Math.floor(interval / 1000);

document.write("Already: "+days+" days, "+hours+" hours, "+minutes+" minutes, "+seconds+" seconds"); document.write("<br/>");

//calc birthday
var birthday = new Date("8/1/1985");
var today = new Date();
var years = today.getFullYear() - birthday.getFullYear();

var compareDay = new Date(birthday);
compareDay.setYear(today.getFullYear());

if (today < compareDay) {
    years--;
}
document.write("Birthday is : "+birthday+", Age is : " +years); document.write("<br/>");


//comparing 
var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

var specificDate = new Date("1/27/2016");

if (today.getTime() === specificDate.getTime()) {
    document.write("Same time.");
    document.write("<br/>");
} else {
    document.write("Different time: "+today.getTime() +" AND "+specificDate.getTime()); document.write("<br/>");
}

//comparing in range
var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

var rangeStartDate = new Date("2000-01-01");
var rangeEndDate = new Date("2020-01-01");

if ((today.getTime() > rangeStartDate.getTime()) && (today.getTime() < rangeEndDate.getTime())) {
    document.write("specified date " + today + " is within this range."); document.write("<br/>");
} else {
    document.write("specified date: "+today+" is without this range."); document.write("<br/>");
}

//formatting
var date = new Date(Date.UTC(2015, 1, 1, 14, 0, 0));
var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
};

document.write(date.toLocaleDateString("en-US")); document.write("<br/>");
document.write(date.toLocaleTimeString("en-us", options)); document.write("<br/>");
document.write(date.toDateString("zh-CN")); document.write("<br/>");
document.write(date.toLocaleTimeString("zh-CN", options)); document.write("<br/>");

var number = 123456.789;
document.write(number.toLocaleString("zh-Hans-CN-u-nu-hanidec")); document.write("<br/>");

var now = new Date();
document.write(now); document.write("<br/>");
document.write(now.toUTCString()); document.write("<br/>");


































ShowTailer();