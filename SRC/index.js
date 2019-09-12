// import displayDate from './App/todayDate.js'
var displayDate = require('./App/todayDate.js')

let div = document.querySelector('#root')
console.log(div)

myParagraph = document.createElement('p');
div.appendChild(myParagraph)
myParagraph.className = "dyna";

myParagraph.innerHTML = `The time is ${displayDate}!`


// console.log('&&&&&&&&&&&&&&&&&', displayDate);
