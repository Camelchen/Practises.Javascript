///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

//json syntax
var employees = [
    {
        "firstName": "John",
        "lastName": "Doe"
    },
    {
        "firstName": "Anna",
        "lastName": "Smith"
    },
    {
        "firstName": "Peter",
        "lastName": "Jones"
    }
];


for (var i = 0; i < employees.length; i++) {
    //document.getElementById("syntax").innerHTML += "<br/>" + 
    ShowOutput(employees[i].firstName + " " + employees[i].lastName);
}

employees[1].firstName = "Gilbert";
ShowOutput(employees[1].firstName + " " + employees[1].lastName);


//json parser
var textOfEmployees = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var objOfEmployees = JSON.parse(textOfEmployees);

ShowOutput("JSON element by parser:");

for (var i = 0; i < objOfEmployees.employees.length; i++) {
    ShowOutput(objOfEmployees.employees[i].firstName + " " + objOfEmployees.employees[i].lastName);
}