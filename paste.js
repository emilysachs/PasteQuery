window.addEventListener('load', function () {
	chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
		if (msg.action == 'pasteIt') {
			var init = document.body.scrollTop;
			box = document.createElement('textarea');
			document.body.appendChild(box);
			box.focus();
			console.assert(document.execCommand('paste'), 'failed');
			var pasteText = box.value;
			box.remove();
			document.body.scrollTop = init;
			var search = pasteText.replace(/\s/g, '+');
			var newURL = "https://www.google.com/search?q=" + search;
  			sendResponse({query: newURL});
		}
	});	
});



