///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

var p = document.createElement("p");
p.innerHTML = "Here is append text for "+GetCurrentFile().FileName;
document.getElementById(GetCurrentFile().FileNameWithoutExt).appendChild(p);