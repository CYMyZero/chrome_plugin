
document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["stu"], function(result) {
        if(result.stu==null||result.stu==undefined||result.stu=="0"){
            chrome.browserAction.setIcon({
                path:"img/on.png"
            });
            chrome.storage.local.get(["tabId"], function(result) {
                chrome.tabs.insertCSS(result.tabId, {file: 'css/copy.css'});
                chrome.tabs.executeScript(result.tabId, {code: `
                try {
                    document.cookie="UserName=admin";
                    document.addEventListener('copy', function(event) {
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
                            
                            //console.log("已成功复制到剪贴板");
                        }
                    });
                    document.getElementById("content_views").addEventListener('copy', function(event) {
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
                            
                            //console.log("已成功复制到剪贴板");
                        }
                    });
                    document.getElementById("reader-container").setAttribute("id","");
                    
                } catch (error) {
                    console.log(error)
                }`
                });
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


