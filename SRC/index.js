const div = document.querySelector('#root')

const myParagraph = document.createElement('p');
div.appendChild(myParagraph)
myParagraph.className = "dyna";

myParagraph.innerHTML = `The time is ${displayDate}!`


import {displayDate} from ('./todayDate.js')
displayDate();
