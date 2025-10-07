// object--

const person1 = {
    firstName: "spongebob",
    lastName: "squarepants",
    favFood: "hamburger",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("HI! I am Spongebob!")},
    eat: function(){console.log("I'm eating krabby patty")},
    eating: function(){console.log(`${this.firstName} is eating ${this.favFood}`)}
}

const person2 = {
    firstName: "patrick",
    lastName: "star",
    favFood: "pizza",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey! I am patrick"),
    eat: () => console.log("I'm eating roast beef, chiken and pizza"),
    eating: () => console.log(`${this.firstName} is eating ${this.favFood}`), // "this" keyword doesn't work in arrow function.
}

person1["do"] = "lazy";
person1.hello = "hello";

console.log(person1.firstName);
console.log(person1.do);
console.log(person1.hello);
person1.sayHello();
person1.eat();
person1.eating();

console.log(person2.firstName);
person2.sayHello();
person2.eat();
person2.eating();


function countPassFail(scores){
let obj = {
pass: 0, fail:0
}
for (let i = 0; i < scores.length; i++) {
if(scores[i]>=60){
obj.pass++
}else{
obj.fail++
}
}
return obj
}
console.log(countPassFail([50,85,91,40,60,55]))

let a = 10
for(let i = 0; i <= a; i++){
    console.log(i);
}
