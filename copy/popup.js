document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["stu"], function(result) {
        if(result.stu==null||result.stu==undefined||result.stu=="0"){
            chrome.browserAction.setIcon({
                path:"img/on.png"
            });
            chrome.storage.local.get(["tabId"], function(result) {
                chrome.tabs.insertCSS(result.tabId, {file: 'css/copy.css'});
            });
            chrome.storage.local.set({"stu": "1"}, function() {});
        }else{
            chrome.browserAction.setIcon({
                path:"img/off.png"
            });
            chrome.storage.local.set({"stu": "0"}, function() {});
        };
    });

});