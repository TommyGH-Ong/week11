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

// const enteredValue = prompt("Enter a value")

// //references to p tag
// const radiusPara = document.querySelector("#radius");
// radiusPara.textContent = radiusPara.textContent + " " + enteredValue
// // console.log(radiusPara)
// const resultPara = document.querySelector("#result");
// // console.log(resultPara)

// function calculateArea(radius){
// // check if radius is not a number
//     if(isNaN(radius)){
//         // alert("This is not a number");
//         // update the resultPara to show the error
//         resultPara.textContent = "This is not a number"
//     }
//     else {
//         const area = Math.PI * radius * radius;
//         return area.toFixed(2);
//     }
// }
// let result = calculateArea(enteredValue)
// if (result){
//     //update the radiusPara
//     // alert(`The area of a circle with radius ${enteredValue} is ${result}`)
//     resultPara.textContent = `The area of a circle with radius ${enteredValue} is ${result}`
// }

const ulElement = document.querySelector(".shopping")

function populateList(myShoppingList){
    //get access to the ul element

    // console.log(ulElement)

    //loop through myShoppingList array
    for (let item of myShoppingList) {
        //console.log(item);
        //make a new li document.createElement
        const newLi = document.createElement("li");
        //update the text of the new li
        newLi.textContent = item;
        //append the new li under ul
        ulElement.appendChild(newLi)
    } 
    //add an li under the ul element with text equal to each item of myShoppingList
}

let shoppingList = ['bread', 'cheese', 'green pepper'];
populateList(shoppingList)

function squareList(){
    //get access to the ul
    //remove circleList class
    ulElement.classList.remove('circleList')
    //add squareList class
    ulElement.classList.add('squareList')
}
squareList()