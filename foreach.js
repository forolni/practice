// foreach method--

let numbers = [1, 2, 3, 4, 5];


function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function display(element){
    console.log(element);
}

numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(display);

let foods = ["apple", "orange", "pizza"]

function displayfood(element){
    console.log(element)
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
foods.forEach(capitalize);
foods.forEach(displayfood);

// map method--


let dates = ["2024-10-01", "2025-20-02", "2026-30-03"];

let formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element){
    const parts = element.split("-")
    return `${parts[2]}-${parts[1]}-${parts[0]}` ;
}

// filter method--


let words = ["apple", "orange", "banana", "kiwi", "pomegranat", "coconut"]

let shortWords = words.filter(getShortWords);
let longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}
function getLongWords(element){
    return element.length > 6;
}

const num = [1,2,3,4,5,6,7,8,9];

const even = num.filter(isEven);
const odd = num.filter(isOdd);

function isEven(element){
    return element % 2 == 0; 
}

function isOdd(element){
    return element % 2 != 0; 
}
console.log(even);
console.log(odd);


//reduce method--


let marks = [45, 60, 70 ,90 ,80 ,94]

let max = marks.reduce(getMax);
let min = marks.reduce(getMin);
let total = marks.reduce(sum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

function sum(accumulator, element){
    return accumulator + element;
}


console.log(max);
console.log(min);
console.log(total);