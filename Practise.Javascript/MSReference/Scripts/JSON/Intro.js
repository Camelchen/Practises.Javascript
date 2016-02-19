///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();


//json intro
//ShowOutput("Here is JSON intro in script.");

var text = '{"name":"John","street":"montreal","phone":"514 1234567"}';

var obj = JSON.parse(text);


ShowOutput("&nbsp &nbsp &nbsp" + obj.name + ", " + obj.street + ", " + obj.phone);
