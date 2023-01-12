var box1 = document.getElementById('im-1');
var box2 = document.getElementById('im-2');
var box3 = document.getElementById('im-3');

var boximage1 = document.getElementById('icon1');
var boximage2 = document.getElementById('icon2');
var boximage3 = document.getElementById('icon3');

function changeColor1(){
    box1.style.backgroundColor = "#f0401b"
    boximage1.style.filter  = 'brightness(0) invert(1) '; // IE fallback
}

function changeback1(){
    boximage1.style.removeProperty("filter");
    box1.style.backgroundColor = "white"
}

function changeColor2(){
    box2.style.backgroundColor = "#f0401b"
    boximage2.style.filter  = 'brightness(0) invert(1) '; // IE fallback
}

function changeback2(){
    boximage2.style.removeProperty("filter");
    box2.style.backgroundColor = "white"
}

function changeColor3(){
    box3.style.backgroundColor = "#f0401b"
    boximage3.style.filter  = 'brightness(0) invert(1) '; // IE fallback
}

function changeback3(){
    boximage3.style.removeProperty("filter");
    box3.style.backgroundColor = "white"
}