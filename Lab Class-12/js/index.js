function buttonClick1() {
    alert('Hello Dear');
}

function paraClick() {
    document.getElementById('paraID').innerHTML = 'This is second text of the paragraph';
}

function paraClick1() {
    document.querySelector('#paraID').innerHTML = 'Hi There! I like you';
}

function imageClick() {
    document.querySelector('#imageID').src = "images/image1.png";
}

var images = ['images/mountain.png', 'images/sky.png', 'images/bird.png'];
var index = 0;

function showimage() {
    document.getElementById('slider').src = images[index];
}

function prev() {
    if (index > 0) {
        index--;
        showimage();
    } else {
        alert('This is the first image');
    }
}

function next() {
    if (index < images.length - 1) {
        index++;
        showimage();
    } else {
        alert('This is the last image');
    }
}

showimage();