// //function declaration
// function greet(inputname, time="day") {
//     console.log(`Good ${time} ${inputname}!`);
// };

// //function expression
// const greet = function(inputname)
// {
//     console.log(`Hello ${inputname}!`);
// };

// //arrow function
// let greet = inputname => {
//     console.log(`Hello ${inputname}!`);
// };

// //function calling
// greet("Tommy");

// function getvalue(){
//     value = prompt(`Give me a value`);
//     Circlearea = Math.PI * Math.pow(value, 2)
//     alert(`The area of a circle with radius ${value} is ${Circlearea}`)
// }
// getvalue()

const enteredValue = prompt("Enter a value")

//references to p tag
const radiusPara = document.querySelector("#radius");
radiusPara.textContent = radiusPara.textContent + " " + enteredValue
// console.log(radiusPara)
const resultPara = document.querySelector("#result");
// console.log(resultPara)

function calculateArea(radius){
// check if radius is not a number
    if(isNaN(radius)){
        // alert("This is not a number");
        // update the resultPara to show the error
        resultPara.textContent = "This is not a number"
    }
    else {
        const area = Math.PI * radius * radius;
        return area.toFixed(2);
    }
}
let result = calculateArea(enteredValue)
if (result){
    //update the radiusPara
    // alert(`The area of a circle with radius ${enteredValue} is ${result}`)
    resultPara.textContent = `The area of a circle with radius ${enteredValue} is ${result}`
}


