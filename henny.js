// conditionals

const x = 5;
const y = 12;

// == does not match the data types, just the value ex 10 and '10' have 10 therefore they are == to each other
// === matches the data types and the value, for ex 10 is not equal to '10' because '10' is a string.

// if(x === 10){
//     console.log('x is 10');
// } else if(x > 10){
//     console.log('x is greater than 10')
// }else {
//     console.log('x is less  than 10');
// }

// || means or
// && means and

if(x > 5 || y > 10){
    console.log('x is more than 5 or y is more than 10');
// } else if(x > 10){
//     console.log('x is greater than 10')
// }else {
//     console.log('x is less  than 10');
}

// ternary operator
// ? means than
// : means else

// const j = 15;

// const color = j > 10 ? 'red' : 'blue';

// console.log(color);


// switches
// const j = 9;

// const color = j > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
    
// }

//Functions

// function addNums(num1, num2) {
//     console.log(num1 + num2);
// }

// addNums(9,8);

// function addNums(num1 = 7, num2 = 7) {
//     console.log(num1 + num2);
// }

// addNums(); // IF YOU ADD NUMBERS IN addNums it will override the numbers in your functions ex:

function addNums(num1 = 7, num2 = 7) {
    console.log(num1 + num2);
}

addNums(8,8);

