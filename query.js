chrome.commands.onCommand.addListener(function(command) {
	if(command === "paste-tab"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "pasteIt" }, function(response){
            	var search = response.query;
          		chrome.tabs.create({ url: search });
            });
        });
    }
});