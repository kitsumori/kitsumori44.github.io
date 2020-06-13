let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pekora.png'){
        myImage.setAttribute ('src','images/pekora-drunk.png');
    } else {
        myImage.setAttribute ('src', 'images/pekora.png');
    }
    
}

//setting variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//function
function setUsername(){
    let myName = prompt('Please enter your name-ぺこ。');
    if(!myName || myName === null){
        setUsername();
    } else {

    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcomew, ' + myName + '-様';
    }

}

if (!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcomew, ' + storedName + '-様';
}

myButton.onclick = function(){
    setUsername();
}

