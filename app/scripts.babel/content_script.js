
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
				while ( child ) 
				{
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
		var v = textNode.nodeValue;	
		if (val) {
			v = v.replace(/\bExample\b/g, val);
			v = v.replace(/\bTrump\b/g, val);
			v = v.replace(/\bTRUMP\b/g, val);
		}
		textNode.nodeValue = v;
	}
}

function init(callback) {
    let blankWord;
    chrome.storage.sync.get('blankWord', function (val) {
        blankWord = val.blankWord;
        callback(blankWord);
    });
}

init(crawlWithVal);