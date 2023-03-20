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
function calculateArea(radius){
// check if radius is not a number
    if(isNaN(radius)){
        alert("This is not a number");
    }
    else {
        const area = Math.PI * radius * radius;
        return area.toFixed(2);
    }
}
let result = calculateArea(enteredValue)
if (result){
    alert(`The area of a circle with radius ${enteredValue} is ${result}`)
}


