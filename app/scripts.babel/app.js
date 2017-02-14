let trumpToBlankForm = document.getElementById('form');
let blankWord = document.getElementById('form-input');

document.addEventListener('DOMContentLoaded', init);
trumpToBlankForm.addEventListener('submit', updateWord);


function init() {
  chrome.storage.sync.get('blankWord', function (val) {
    blankWord.value = val.blankWord;
  });
}

function updateWord() {
	chrome.runtime.sendMessage({action: 'updateWord', word: blankWord.value	});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {word: blankWord.value});
	});
	window.close();
}