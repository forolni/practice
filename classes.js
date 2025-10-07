class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price.toFixed(2)}`)
    }

    calculateTotal(saleTax){
        return this.price + (this.price * saleTax)
    }
}

const saleTax = 0.05;

const product1 = new product("Shirt", 32.50);
const product2 = new product("pant", 22.99);
const product3 = new product("Shoe", 59.99)


product1.displayProduct();

const total = product1.calculateTotal(saleTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`)


class mathUtils{
    static pi = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.pi * radius;
    }

    static getArea(radius){
        return this.pi * radius * radius;
    }
}

console.log(mathUtils.pi);
console.log(mathUtils.getDiameter(10));
console.log(mathUtils.getCircumference(10));
console.log(mathUtils.getArea(10));

class user{
    static userCount = 0;

    constructor(username){
        this.username = username;
        user.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${user.userCount} user online`)
    }

    sayHello(){
        console.log(`Hello! my username is ${this.username}`)
    }
}

const user1 = new user("spongebob")
const user2 = new user("patrick")
const user3 = new user("squidward")

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(user.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();
user.getUserCount();