'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest) {
	if (request.action === 'updateWord') {
		console.log(request);
		chrome.storage.sync.set({'blankWord': request.word});
	}
})