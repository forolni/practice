// function declaration--

function hello_f(){
    console.log("Hello");
}

//function expression--

let hello_e = function(){
    console.log("Hello");
}

hello_f();
hello_e();

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
        return element * 2;
})
const cube = numbers.map(function(element){
        return element * 3; 
})

const evenNums = numbers.filter(function(element){
        return element % 2 == 0;
})

const oddNums = numbers.filter(function(element){
        return element % 2 != 0;
})

const total = numbers.reduce(function(accumulator, element){
        return accumulator + element;
})
console.log(squares);
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);

// arrow function--

const arrow_number = [1, 2, 3, 4, 5, 6]

const double = arrow_number.map((element) => element * 2);
const triple = arrow_number.map((element) => element * 3);
const even = arrow_number.filter((element => element % 2 == 0));
const odd = arrow_number.filter((element) => element % 2 != 0);
const arrow_total = arrow_number.reduce((accumulator, element) => accumulator + element);

console.log(double);
console.log(triple);
console.log(even);
console.log(odd);
console.log(arrow_total);

(()=>{console.log("Hello")})()  // IIFE anonymous funcition

