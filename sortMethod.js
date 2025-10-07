let fruits = ["apple", "orange", "banana", "cocunut", "pineapple"];

fruits.sort();

console.log(fruits);

let numebrs = [1, 10 , 3, 6, 9 ,8, 7, 5, 4, 2];

numebrs.sort((a, b) => a - b);

console.log(numebrs);

const person = [{name: "spongebob", age: 28, gpa: 3.25},
                {name: "patrick", age: 34, gpa: 2.40},
                {name: "squidward", age: 40, gpa: 3.00},
                {name: "sandy", age: 27, gpa: 4.00}];

person.sort((a, b) => a.age - b.age);

person.sort((a, b) => a.name.localeCompare(b.name));

console.log(person);

const date = new Date;

console.log(date);