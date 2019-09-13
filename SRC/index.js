import displayDate from './App/todayDate.js'
import oblits from './App/obj'
// var displayDate = require('./App/todayDate.js')

let div = document.querySelector('#root')

let myParagraph = document.createElement('p');
div.appendChild(myParagraph)
myParagraph.className = "dyna";

myParagraph.innerHTML = `The time is ${displayDate}!`

displayDate();



