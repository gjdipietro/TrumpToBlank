'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest) {
	if (request.action === 'updateWord') {
		chrome.storage.sync.set({'blankWord': request.word});
	}
});
