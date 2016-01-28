ShowHeader();


var myObj = new Object();
myObj.name = "Fred";
myObj.age = 42;

myObj.getAge = function () {
    return this.age;
};

document.write(myObj.name);
document.writeln("<br>"); 
document.write(myObj.age);
document.writeln("<br>");
document.write(myObj.getAge());
document.write("<br/>");



//Array as objects
var myArray = new Array(3);

myArray[0] = "Hello";
myArray[1] = "42";
myArray[2] = new Date(2000, 1, 1);

document.write("original length is :" + myArray.length);
document.write("<br/>");

myArray.expando = "Javascript!";
myArray["another expando"] = "Windows";

document.write("new length is : " + myArray.length);
document.write("<br/>");

var myArrayDatetime = new Array(3);

for (var i = 0; i < 3; i++) {
    myArray[i] = new Date(2000 + i, 1, 1);
}

myArray.forEach(function (item) { document.write(item.getFullYear()); document.write("<br/>"); });


//multi-Dimensional arrays
var iMaxNum = 5;
var MultiplicationTable = new Array(iMaxNum + 1);

for (var i = 1; i <= iMaxNum; i++) {

    MultiplicationTable[i] = new Array(iMaxNum + 1);

    for (var j = 1; j <= iMaxNum; j++) {
        MultiplicationTable[i][j] = i * j;
    }

}

document.write(MultiplicationTable[3][4]);
document.write("<br/>");
document.write(MultiplicationTable[5][2]);
document.write("<br/>");
document.write(MultiplicationTable[1][4]);



ShowTailer()