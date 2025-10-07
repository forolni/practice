// destructuring extract values from array and object,
//              then assign them to variables in a convenient way
//              [] = to perform array destructuring
//              {} = to perform object destructuring


// example -1
// swap the value  of two variable

let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(a, b);

// example -2
// swap 2 elements in an array

const colors = ["red", "green", "blue", "white", "black"];

const whiteIndex = colors.findIndex(color => color === "white");
const blackIndex = colors.findIndex(color => color === "black");
const redIndex = colors.findIndex(color => color === "red");

[colors[0], colors[1], colors[2], colors[3],  colors[4]] = [colors[whiteIndex], colors[blackIndex], colors[redIndex], colors[1], colors[2]];

// [colors[whiteIndex], colors[blackIndex]] = [colors[4], colors[3]];

console.log(colors);

// example -3
// assign array element variables

const colorV = ["red", "green", "blue", "white", "black"];

[firstColor, secondColor, thirdColor, ...extraColors] = colorV;

 console.log(firstColor);
 console.log(secondColor);
 console.log(thirdColor);
 console.log(extraColors);

 // example -4
 // extract value from object

 const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepant",
    age: 25,
    job: "Fry cook"
 }

 const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 27
 }

 const {firstName, lastName, age, job= "Unemployment"} = person1;

 console.log(firstName);
 console.log(lastName);
 console.log(age);
 console.log(job);

 // example -5
 // destructure in function parameter

 function displayperson({firstName, lastName, age, job="Unemployment"}){
        console.log(`name: ${firstName} ${lastName} vii`);
        console.log(`age: ${age}`);
        console.log(`job: ${job}`);
 }

 displayperson(person1);
 displayperson(person2);