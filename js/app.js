'use strict';

console.log('hello world!');

var flipped = true;
var initialText = 'Show / Hide Original';
function showHide(button){
  var rows = document.getElementsByClassName('row');
  if (initialText === button.innerText) {
    alert('Best viewed on Chrome at 80% zoom level.');
  }
  if (flipped) {
    rows[0].hidden = 'hidden';
    rows[1].hidden = 'hidden';
    rows[2].hidden = 'hidden';
    document.body.style.backgroundImage = 'url("./images/PREVIEW.jpg")';
    button.innerText = 'Showing Original Image';
    flipped = false;
  } else {
    rows[0].hidden = '';
    rows[1].hidden = '';
    rows[2].hidden = '';
    document.body.style.backgroundImage = '';
    button.innerText = 'Showing Matched HTML';
    flipped = true;
  }
};


function insertButton(button){
  button.innerText = initialText;
  button.style = 'top:0;right:0;position:fixed;z-index: 9999';
  button.addEventListener('click', function() {
    showHide(this);
  });
  document.body.appendChild(button);
};


var cornerButton = document.createElement('Button');
insertButton(cornerButton);
