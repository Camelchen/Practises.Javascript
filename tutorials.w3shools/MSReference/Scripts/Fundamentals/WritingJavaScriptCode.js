ShowHeader();

//Statements
var aBird = "Robins"; // Assign the text "Robin" to the variable aBird.
var today = new Date(); // Assign today's date to the variable today.

function InchesToMeters (inches)
{
    if (inches < 0) {
        return -1;
    }
    else {
        var meters = inches / 39.37;
        return meters;
    }
}

var inches = 12;
var meters = InchesToMeters(inches);
document.writeln("the value in meters is " + meters);

//Comments
var aGoodIdea = "Comment your code thoroughly."; // This is a single-line comment.
/*
This is a multiline comment that explains the preceding code statement.

The statement assigns a value to the aGoodIdea variable. The value, 
which is contained between the quote marks, is called a literal. A 
literal explicitly and directly contains information; it does not 
refer to the information indirectly. The quote marks are not part 
of the literal.
*/

// This is another multiline comment, written as a series of single-line comments.
// After the statement is executed, you can refer to the content of the 
// aGoodIdea variable by using its name.
var extendedIdea = aGoodIdea + " You never know when you'll have to figure out what it does.";


//Assignments and Equality
var anInteger = 3;

//Expressions
var anExpression = 3 * (4 / 5) + 6;
var radius = 1.9
var aSecondExpression = Math.PI * radius * radius;
var aThirdExpression = aSecondExpression + "%" + anExpression;
var aFourthExpression = "(" + aSecondExpression + ") % (" + anExpression + ")";

ShowTailer()
