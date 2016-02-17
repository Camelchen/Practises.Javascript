ShowHeader();


//json
ShowOutput("Here is debug info in script.");

var text = '{"name":"John","street":"montreal","phone":"514 1234567"}';

var obj = JSON.parse(text);
console.dir(obj);

document.getElementById("demo").innerHTML += "&nbsp &nbsp &nbsp" + obj.name + ", " + obj.street + ", " + obj.phone;
