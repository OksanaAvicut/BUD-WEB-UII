//1цилiндр

const diametr = +prompt("enter cilinder diametr in cm");
const height = +prompt("enter height of cylinder in cm");
const radius = diametr /2;
const volume = Math.PI * (radius * radius) * height;
alert (`cilinder volume will be ${ volume } cbcm`);
 


//2 NAME

let userName = prompt ("What is your name?");
alert (`Hi ${userName} !`);


//3 perimetr

const textEnter = `Enter size of your rectangle in cm`;
const figuresidescount = 4;
const sideLength = +prompt(textEnter);
const perimetr = sideLength * figuresidescount;
const textAnsver = `perimetr of your figure is ${perimetr} cm`;
alert (textAnsver);


//4 distance 

const distance = prompt (`insert total distance in km `);
const time = prompt (`insert HRS do you have from this distance `)
alert (`Your speed ${Math.round (distance / time) } km/h`)



//Hard


//1 

const userNumber = prompt(`insert three numbers`);
alert (`your revers ${userNumber.split("").reverse().join("")}.` );


//2


const celciusTeperature = prompt(`Type please temperature in celsium`);
alert (`your temperature in Fahrenheiht is ${Math.round((celciusTeperature * 9) / 5 +32) }.`);


//3

const redHex = prompt(`insert red color in hex`);
const greenHex = prompt(`insert green color in hex`);
const blueHex = prompt(`insert blue color in hex`);

const r = parseInt (redHex, 16);
const g = parseInt (greenHex, 16);
const b = parseInt (blueHex, 16);
s
const color = `rgb(${r},${g},${b})`;
alert `your color - ${color}`;