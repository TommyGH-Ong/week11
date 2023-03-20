//function declaration
function greet(inputname) {
    console.log(`Hello ${inputname}!`);
};

//function expression
const greet = function(inputname)
{
    console.log(`Hello ${inputname}!`);
};

//arrow function
let greet = inputname => {
    console.log(`Hello ${inputname}!`);
};

//function calling
greet("Tommy");