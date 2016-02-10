///<reference path="~/Scripts/Common/Common.js" />
ShowHeader();

//Template String

var name = "Zhuoruic";
var str = `Hello ${name}, how are you this fine ${partOfDay()}?`

ShowOutput(str);

function partOfDay() {
    var hour = new Date().getHours();

    if (hour<=12) {
        return "morning";
    } else {
        if (hour<=15) {
            return "afternoon";
        } else {
            return "evening";
        }
    }
}


//build URL

function buildURL(strArray,...valArray) {
    //console.log(strArray.raw);
    var newUrl = strArray[0] + "ja-ja" + "/" + valArray[1] + "/" + valArray[2];
    return newUrl;
}

var lang = "en-us";
var a = "library";
var b = "dn123456.aspx";

var url = buildURL`http://msdn.microsoft.com/${lang}/${a}/${b}`;
ShowOutput(url);