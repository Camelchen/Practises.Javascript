ShowHeader();

//using condition statements

function GetReaction(newShip, color, texture, dayOfWeek) {
    if (newShip) {
        return "Champagne Bottle";
    }

    if (color == "deep yellow" && texture == "large and small wrinkles") {
        return "Is it a crenshaw melon?";
    }

    if ((dayOfWeek == "Saturday") || (dayOfWeek == "Sunday")) {
        return "I'm off to the beach!";
    }
    else {
        return "I'm goint to work.";
    }
}


var reaction = GetReaction(false, "deep yellow", "smooth", "Sunday");
document.writeln(reaction);
document.write("<br />");

var theHour = 1;
var AMorPM = (theHour > 12) ? "PM" : "AM";
document.write(AMorPM);


//using for loops
var howFar = 10;

var sum = new Array(howFar);
sum[0] = 0;

var theSum = 0;
for (var icount = 0; icount < howFar; icount++) {
    theSum += icount;
    sum[icount] = theSum;
}

var newSum = 0;
for (var icount = 0; icount < howFar; icount++) {
    newSum += icount;
}
document.write("<br />");

/*
//an infinite loop
var sum = 0;
for (var icount = 0; icount >= 0; icount++) {
    sum += icount;

}
*/

//using for in loops
var myObject = new Object();
myObject.name = "James";
myObject.age = "22";
myObject.phone = "555 1234";

for (var prop in myObject) {
    document.write("The property '" + prop + "' is " + myObject[prop]);
    if (prop!="phone") {
        document.write("<br />");
    }
    
}

//using while loops
/*
var x = 0;
while ((x != 5) && (x != null)) {
    x = window.prompt("What is my favorite number?", x);
}

if (x==null) {
    window.alert("You give up!");
}
else {
    window.alert("Correct answer!");
}
*/

//using do while loop
/*
var x = 0;
do {
    x = window.prompt("What is my favorite number?", x);
} while ((x != 5) && (x != null));

if (x==null) {
    window.alert("You gave up!");
}
else {
    window.alert("Correct answer!");
}
*/

ShowTailer()