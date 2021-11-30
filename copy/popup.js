
    document.addEventListener("DOMContentLoaded", function () {
        chrome.storage.local.get(["stu"], function(result) {
            if(result.stu==null||result.stu==undefined||result.stu=="0"){
                chrome.browserAction.setIcon({
                    path:"img/on.png"
                });
                chrome.storage.local.get(["tabId"], function(result) {
                    if(window.location.href.slice(0,9).indexOf("chrome://")!=-1){
                        chrome.tabs.insertCSS(result.tabId, {file: 'css/copy.css'});
                        chrome.tabs.executeScript(result.tabId, {code: 'try {document.getElementById("reader-container").setAttribute("id","")} catch (error) {console.log(error)}'});
                    }
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


