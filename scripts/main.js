// function use to change the picture in webpage
var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Firefox-1.jpg') {
      myImage.setAttribute ('src','images/Firefox-2.jpg');
    } else {
      myImage.setAttribute ('src','images/Firefox-1.jpg');
    }
};

// function use to add the name in webpage title
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is Cool,' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is Cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}