const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}]

fruits.push({name: "grapes" ,color: "purple", calories: 62});
// fruits.pop();
// fruits.splice(1,3);
console.log(fruits);

fruits.forEach(fruit => console.log(fruit));

const fruitName = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitName);
console.log(fruitColor);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const highCalories = fruits.filter(fruit => fruit.calories > 100);
const lowCalories = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits);
console.log(highCalories);
console.log(lowCalories);

const maxFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ?
                                fruit : max );

const minFruits = fruits.reduce((min, fruit) => fruit.calories < min.calories ?
                                fruit : min );

console.log(maxFruits);
console.log(minFruits);