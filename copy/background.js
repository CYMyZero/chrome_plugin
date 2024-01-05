
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    console.log(tabId);
    chrome.storage.local.get(["stu"], function(result) {
        chrome.storage.local.set({"tabId": tabId}, function() {});
        if (result.stu=="1"&&changeInfo.status == "loading") {
            chrome.browserAction.setIcon({
                path:"img/on.png"
            });
            chrome.tabs.insertCSS(tabId, {file: 'css/copy.css'});
            
            chrome.tabs.executeScript(tabId, {code: `
            try {
                document.cookie="UserName=admin";
                document.addEventListener('copy', function(event) {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.getSelection().toString()).then(() => {
                           // console.log("已成功复制到剪贴板");
                        }, () => {
                            console.error("无法复制到剪贴板");
                        });
                    } else {
                        var tempInput = document.createElement("input");
                        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
                        tempInput.value = text;
                        
                        document.body.appendChild(tempInput);
                        tempInput.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempInput);
                        
                        console.log("已成功复制到剪贴板");
                    }
                });
                document.getElementById("content_views").addEventListener('copy', function(event) {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.getSelection().toString()).then(() => {
                            //console.log("已成功复制到剪贴板");
                        }, () => {
                            console.error("无法复制到剪贴板");
                        });
                    } else {
                        var tempInput = document.createElement("input");
                        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
                        tempInput.value = text;
                        
                        document.body.appendChild(tempInput);
                        tempInput.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempInput);
                        
                        console.log("已成功复制到剪贴板");
                    }
                });
                document.getElementById("reader-container").setAttribute("id","");
                
            } catch (error) {
                console.log(error)
            }`
            });
            
        }else if(result.stu!="1"){
            chrome.browserAction.setIcon({
                path:"img/off.png"
            });
        };
    });
});

