// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// Adding an image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src')
  if (mySrc = 'images/doge.jpg') {
    myImage.setAttribute('src', 'images/doge1.jpg');
  } else {
    myImage.setAttribute('src', 'images/doge.jpg');
  }
}

// Adding a personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I am Dung Bui. Hello, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'I am Dung Bui. Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
