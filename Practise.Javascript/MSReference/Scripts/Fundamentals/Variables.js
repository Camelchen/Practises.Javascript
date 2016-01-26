ShowHeader();

//Declaring Variables

// A single declaration.
var count;
// Multiple declarations with a single var keyword.
var count, amount, level;
// Variable declaration and initialization in one statement.
var count = 0, amount = 100;

document.writeln(count + "," + amount);

//Coercion
var x = 2000;
var y = "Hello";
// The number is coerced to a string.
x = x + y;
document.write(x);

ShowTailer()