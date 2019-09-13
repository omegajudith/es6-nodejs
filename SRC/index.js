import {today , date} from './App/todayDate.js'
import {oblits} from './App/obj.js'

let myDiv = document.querySelector('#root');
let myParagraph = document.createElement('p');
myDiv.appendChild(myParagraph)
// myParagraph.innerHTML = "thanks erick for js love"
myParagraph.className = "dyna";

myParagraph.innerHTML = "Today is " + today;

console.log(today);
console.log(date);
console.log(oblits);




