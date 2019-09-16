// import {today , date} from './App/todayDate.js'
// import {oblits} from './App/obj.js'

// let myDiv = document.querySelector('#root');
// let myParagraph = document.createElement('p');
// myDiv.appendChild(myParagraph)
// // myParagraph.innerHTML = "thanks erick for js love"
// myParagraph.className = "dyna";

// myParagraph.innerHTML = "Today is " + today;

// console.log(today);
// console.log(date);
// console.log(oblits);

import React from "react"
import ReactDom from "react-dom"
import {today , date} from './App/todayDate.js'
import {oblits} from './App/obj.js'
let today = "Today is " + today;

const App = () => {
return
    <div>
        <h1>hey tunga ladies</h1>
        <p>{today}</p>
    </div>
}
let myDiv = document.querySelector('#root');
ReactDom.render(<App/>,myDiv)



