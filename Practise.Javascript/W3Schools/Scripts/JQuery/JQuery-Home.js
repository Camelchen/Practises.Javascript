///<reference path="~/Scripts/Common/Common.js" />

ShowHeader();




$(document).ready(function() {
    $("p").click(function () {
        log.info($(this)[0].nodeName+" : "+$(this).attr("id") + " been hidden.");
        $(this).hide();
        
    });
});



