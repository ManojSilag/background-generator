
// import {without} from 'loadash';
// console.log(without);
var _ = require('lodash');


var array = [1,2,3,4,6,7,8,9,10];
console.log('answaer', _.without(array,3));

var css =document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function gradient(){
    body.style.background = "linear-gradient(to right,"+ color1.value +", "+ color2.value +")";
    css.textContent = body.style.background + ";";
}

gradient();
color1.addEventListener("input",gradient);

color2.addEventListener("input",gradient);