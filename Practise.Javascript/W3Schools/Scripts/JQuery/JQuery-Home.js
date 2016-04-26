///<reference path="~/Scripts/Common/Common.js" />

ShowHeader();



//hide element
$("p#hiddenByClick").ready(function () {
    $("p#hiddenByClick").click(function () {
        log.info($(this)[0].nodeName+" : "+$(this).attr("id") + " been hidden.");
        $(this).hide();
    });
});

//hide parent element
$(document).ready(function () {
    $("#btn-hideParent").click(function () {
        log.info($(this).parent().attr("id") + " been hidden.");
        $(this).parent().hide("slow");
    });

});

//hide and show element
$("p#hideAndShow").ready(function () {
    $("#btn-hideAndShow-hide").click(function() {
        log.info($("#hideAndShow").find("span").attr("id") + " been hidden.");
        $("#span-hideAndShow").hide();
    });
    $("#btn-hideAndShow-show").click(function() {
        log.info($("#hideAndShow").find("span").attr("id") + " been shown.");
        $("#span-hideAndShow").show();
    });

});


//show element 
$(document).ready(function() {
    $("#btn-showElement").click(function() {
        $("#showElementResult").text($("#showElement").text());
        log.info("text is : " + $("#showElement").text());
        log.info("html is : " + $("#showElement").html());
        log.info("value is : " + $("#showElement").val());
    });
});


//change element
$("#changeElementAttr").ready(function() {
    $("#btn-ChangeElement").click(function() {
        $("#linkElement").attr({
            "title": "w3schools",
            "href": "http://www.w3schools.com"
        });
        $("#linkElement").text("W3Schools");
    });
});


//append elements
$("p#appendElements").ready(function () {
    $("#btn-appendElements").click(function () {
        for (var i = 1; i <= $("#input-appendElements").val(); i++) {
            var index = $("#li-appendElements > li:last-child").text().split(" ").pop();
            log.info("append " + (parseInt(index) + 1).toString() + "th element.");
            $("#li-appendElements").append("<li>List Item " + (parseInt(index) + 1).toString() + "</li>");
        }
    });
});