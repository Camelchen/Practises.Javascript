///<reference path="~/Scripts/MDN/MDN.Common.js" />

function output(outputInfo) {
    $(document)
    .ready(function () {
            $("#output-reference").append(outputInfo + "<br>");
        });
}

function outputArray(currentValue, index, array) {
    $(document)
    .ready(function () {
        output("index=" + index + ", value: " + currentValue);
    });
}

output("there is reference!");

var a = ["dog", "cat", "hen"];
//foreach
output("foreach");
a.forEach(outputArray);
a.reverse().forEach(outputArray);

/*
This demonstrates a basic function. 
A JavaScript function can take 0 or more named parameters. 
The function body can contain as many statements as you like, 
and can declare its own variables which are local to that function. 
The return statement can be used to return a value at any time, terminating the function. 
If no return statement is used (or an empty return with no value), JavaScript returns undefined.
The named parameters turn out to be more like guidelines than anything else. 
You can call a function without passing the parameters it expects, in which case they will be set to undefined.
*/

var s = "testing";

String.prototype.reversed = function reversedString() {
    var o = "";
    for (var i = this.length-1; i>=0; i--) {
        o += this[i];
    }
    jslog.info(this + " : " + o);
    return o;
    
}

output(s.reversed());


(function (mark, loves, drinking, coffee) {
    //mark.open('http://www.google.com'); //window

    loves.getElementById('menu'); //document
    drinking('#menu').hide(); //jQuery
    var foo;
    console.log(foo === coffee); //undefined
    jslog.info(coffee);

})(window, document, jQuery, s.reversed());