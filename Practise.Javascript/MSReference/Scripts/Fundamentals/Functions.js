ShowHeader();

var epsilon = 0.00000000001;

function integerCheck(a,b,c) {

    if ((a*a)==((b*b)+(c*c))){
        return true;
    }
    return false;
}

function floatCheck(a,b,c) {
    if (Math.abs((a * a) - ((b * b) + (c * c))) < epsilon) {
        return true;
    }
    else {
        return false
    }
}

function checkTriplet(a, b, c) {

    //order by desc
    var arr = [];
    arr.push(a,b,c);
    arr.sort(function (a, b) { return b - a });

    //if integer?
    if (((a % 1) == 0) && ((b % 1) == 0) && ((c % 1) == 0)) {
        return integerCheck(arr[0], arr[1], arr[2]);
    }
    else {
        return floatCheck(arr[0], arr[1], arr[2]);
    }

}

var sideA = 5;
var sideB = 5;
var sideC = Math.sqrt(50.001);
var result = checkTriplet(sideA, sideB, sideC);

document.write("The result of triplet check is: " + result);

//default parameters
var val = 20;
function f(x, y, z) {
    if (y===undefined) {
        y=10;    
    }
    if (z===undefined) {
        z=val;
    }
    return x + y + z;
}

    document.write("default 2 parameter: "+f(1));
    document.writeln("<br>");
    document.write("default 1 parameter: "+f(1,2));
    document.writeln("<br>");
    document.write("default 0 parameter: "+f(1,2,3));

ShowTailer()