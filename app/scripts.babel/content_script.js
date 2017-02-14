const contentScript = (function(){
	//globals
	let blankWord;

	//add listeneres
	addListeners();
	
	//start program
	init();

	function init() {
		chrome.storage.sync.get('blankWord', function (val) {
			blankWord = val.blankWord;
			crawlWithVal(blankWord);
		});
	}

	function addListeners() {
		chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    		if (request.word) {
				crawlWithVal(request.word)
    		}
		});
	}
	
	function crawlWithVal(val) {
		walk(document.body);

	   function walk(node) {
			// I stole this function from here:
			// http://is.gd/mwZp7E
			var child, next;
			if (node.tagName) {
				if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
					return;
				}
			}
			
			switch (node.nodeType)  {
				case 1:  // Element
				case 9:  // Document
				case 11: // Document fragment
					child = node.firstChild;
					while (child) {
						next = child.nextSibling;
						walk(child);
						child = next;
					}
					break;
				case 3: // Text node
					handleText(node);
					break;
			}
		}

		function handleText(textNode) {
			let v = textNode.nodeValue;
			if (val === null || val === undefined) {
				return false;
			}
			v = v.replace(/\bTRUMP\b/gi, val); 
			textNode.nodeValue = v;
		}
	}
})();
