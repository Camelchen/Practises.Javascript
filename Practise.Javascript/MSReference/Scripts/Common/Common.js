function GetCurrentFile() {
    var file = new Array;
    
    var curPath = document.scripts[document.scripts.length - 1].src;
    var curFileName = curPath.substring(curPath.lastIndexOf("/") + 1);

    file["Path"] = curPath;
    file["FileName"] = curFileName;
    file["FileNameWithoutExt"] = curFileName.substring(0,curFileName.lastIndexOf("."));
    return file;
}

function ShowHeader(headerType) {
    
    var curPath = document.scripts[document.scripts.length - 1].src;
    var curFileName = curPath.substring(curPath.lastIndexOf("/") + 1);


    document.write("<br/>");
    document.write(Array(80).join("*"));
    //for debug
    if (headerType === 0) {
        document.write("<b class='curFileName style='color:blue'>" + curFileName + "</b>");
    }
    else {
        document.write("<b class='curFileName'>" + curFileName + "</b>");
    }

    document.write("<br>");
    document.write("<p id='"+curFileName.substring(0,curFileName.length-3)+"' class='jsOutput'></p>");
}

function ShowTailer() {
    document.write("<br/>");
}


function ShowOutput(outputString,sameLine) {

    if (outputString == undefined) {
        outputString = "";
    }
    document.write(outputString);
    if (sameLine == undefined) {
        document.write("<br/>");
    } else {
        document.write(", ");
    }
}