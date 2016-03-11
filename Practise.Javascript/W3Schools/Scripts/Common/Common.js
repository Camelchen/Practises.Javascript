function getCurrentFile() {
    var file = new Array;
    
    var curPath = document.scripts[document.scripts.length - 1].src;
    var curFileName = curPath.substring(curPath.lastIndexOf("/") + 1);

    file["Path"] = curPath;
    file["FileName"] = curFileName;
    file["FileNameWithoutExt"] = curFileName.substring(0,curFileName.lastIndexOf("."));
    return file;
}

function ShowHeader(headerType) {
    
    document.write("<br/>");
    document.write(Array(80).join("*"));
    //for debug
    if (headerType === 0) {
        document.write("<b class='curFileName style='color:blue'>" + getCurrentFile().FileName + "</b>");
    }
    else {
        document.write("<b class='curFileName'>" + getCurrentFile().FileName + "</b>");
    }

    document.write("<br>");
    document.write("<p id='"+getCurrentFile().FileNameWithoutExt+"' class='jsOutput'></p>");
}

function ShowTailer() {
    document.write("<br/>");
}


var lineMark = {comment:"comment"}

function ShowOutput(outputString,lineMark) {

    if (outputString == undefined) {
        outputString = "";
    }

    switch (lineMark) {
    case "comment":
        document.write("<br/><li>" + outputString + "</li>");
        break;
    default:
        document.write("  "+outputString);
    }
    document.write("<br/>");

}

