var log = log4javascript.getDefaultLogger();

function getCurrentFileInfo() {
    var fileInfo = new Array;
    var curPath = document.scripts[document.scripts.length - 1].src;
    var curFileName = curPath.substring(curPath.lastIndexOf("/") + 1);

    fileInfo["Path"] = curPath;
    fileInfo["FileName"] = curFileName;
    fileInfo["FileNameWithoutExt"] = curFileName.substring(0, curFileName.lastIndexOf("."));

    return fileInfo;
}


//build menu
function showMenu() {

    var menuId = "mdn-header-menu";
    var menuItems = [
        {
            name: "MDN Home",
            url: "../Home/Index"
        },
        {
            name: "MDN Guide",
            url: "../Guide/Index"
        }
    ];

    for (var i = 0; i < menuItems.length; i++) {
        if (document.getElementById(menuId).getElementsByTagName("a")[0] !== undefined) {
            document.getElementById(menuId).innerHTML += " | ";
        }
        var menuItem = document.createElement("a");
        menuItem.id = menuId + "-" + menuItems[i].name;
        menuItem.href = menuItems[i].url;
        menuItem.innerHTML = menuItems[i].name;
        document.getElementById(menuId).appendChild(menuItem);
    }

}



