let div = document.querySelector('#root')


let myParagraph = document.createElement('p');
myParagraph.appendChild(p)
myParagraph.className = "dyna";
myParagraph.innerHTML = `The time is ${displayDate} !`



import {displayDate} from ('./todayDate.js')
displayDate();
