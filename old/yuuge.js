'use strict';

/*
  walk(document.body);
  
  function walk(node) {
    var child, next;
    if (node && node.tagName) {
      if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
        return;
      }
    }

    switch ( node.nodeType ) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )  {
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
    v = v.replace(/\bhuge\b/g, "yuuge");
    v = v.replace(/\bHuge\b/g, "Yuuge");
    v = v.replace(/\bHUGE\b/g, "YUUGE");
    textNode.nodeValue = v;
  }
*/

addEventListener( , saveWord)

function saveWord () { 
  specialWord = document.getElementById('specialWord').value;
}

//  PERSISTENT Storage - Globally
//  Save data to storage across their browsers...

console.log(chrome);

chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});

//  LOCAL Storage
// Save data to storage locally, in just this browser...

chrome.storage.local.set({ "specialWord": "awesome" }, function(){
    //  Data's been saved boys and girls, go on home
});

chrome.storage.local.get("specialWord", function(items){
    //  items = [ { "phasersTo": "awesome" } ]
});