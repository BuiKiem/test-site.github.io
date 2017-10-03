var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = this.getAttribute('src');
  if (mySrc === 'images/fireFox.jpg') {
    myImage.setAttribute('src', 'images/thunderBird.png');
  }  else {
    myImage.setAttribute('src', 'images/fireFox.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('userName', myName);
  myHeading.textContent = ('Mozilla is cool, ' + myName);
}

if (!localStorage.getItem('userName')) {
  setUserName();
} else {
  myHeading.textContent = ('Mozilla is cool, ' + localStorage.getItem('userName'));
}

myButton.onclick = function() {
  setUserName();
}
