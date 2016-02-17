///<reference path="~/Scripts/Common/Common.js" />
ShowHeader(0);


setTimeout(function() {
    data = [0, 1, 2, 3];
    document.dispatchEvent(dataReadyHandler);
}, 5000);

