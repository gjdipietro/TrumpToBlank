let blankWord = document.getElementById('blankWord');
let changeWord = document.getElementById('changeWord');

changeWord.addEventListener('click', updateWord);
document.addEventListener('DOMContentLoaded', init);


function init() {
  //check if the word exists from chrome storage

    //if it does show that word and a button to change it

    //if it doesnt show the form to change the word
  blankWord.value = 'Dookie';
}

function updateWord() {
  chrome.runtime.sendMessage({action: 'updateWord', word: blankWord.value});
}