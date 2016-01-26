function ShowHeader(headerType) {
    
    var curPath = document.scripts[document.scripts.length - 1].src;
    var curFileName = curPath.substring(curPath.lastIndexOf('/') + 1);

    document.write("<br/>")
    document.write(Array(60).join("*"));
    //for debug
    if (headerType == 0) {
        document.write("<b style='color:blue'>" + curFileName + "</b>")
    }
    else {
        document.write("<b>" + curFileName + "</b>")
    }

    document.write("<br>")

}

function ShowTailer() {
    document.write("<br/>")
}