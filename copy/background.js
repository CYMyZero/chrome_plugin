chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    chrome.storage.local.get(["stu"], function(result) {
        chrome.storage.local.set({"tabId": tabId}, function() {});
        if (result.stu=="1"&&changeInfo.status == "loading") {
            chrome.browserAction.setIcon({
                path:"img/on.png"
            });
            chrome.tabs.insertCSS(tabId, {file: 'css/copy.css'});
            chrome.tabs.executeScript(tabId, {code: 'try {document.getElementById("reader-container").setAttribute("id","")} catch (error) {console.log(error)}'});
            
        }else if(result.stu!="1"){
            chrome.browserAction.setIcon({
                path:"img/off.png"
            });
        };
    });
});
