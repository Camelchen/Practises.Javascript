ShowHeader();

// Two strings with the same value.
var string1 = "Hello";
var string2 = "Hello";

// Two String objects with the same value.
var StringObject1 = new String(string1);
var StringObject2 = new String(string2);

if (string1 == string2)
    document.write("string1 is equal to string2 <br/>");

if (StringObject1 != StringObject2)
    document.write("StringObject1 is not equal to StringObject2 <br/>");

// To compare the values of String objects, use the toString() or valueOf() methods.
if (StringObject1.valueOf() == StringObject2.valueOf())
    document.write("The value of StringObject1 is equal to the value of StringObject2");

//Output:
// string1 is equal to string2 
// StringObject1 is not equal to StringObject2 
// The value of StringObject1 is equal to the value of StringObject2
document.write("<br/>");

var result = 78 * 96 + 3;
document.write(result);
document.write("<br/>");

result = 78 * (9 + 3);
document.write(result);

// Output:
// 7491
// 936

var num = 10;

if (5 == num / 2 && (2 + 2 * num).toString() === "22") {
    document.write(true);
}
// Output:
// true

ShowTailer()