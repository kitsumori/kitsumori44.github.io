let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/forest.png'){
        myImage.setAttribute ('src','images/forest2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/forest.png');
    }

}
