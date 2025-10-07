class Rectangle{

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    set height(newHeight){
        if(typeof newHeight === "number" && newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("height cannot be a negetive number");
        }
    }

    get height(){
        return this._height;
    }

    set width(newWidth){
        if(typeof newWidth === "number" && newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width cannot be a negetive number");
        }
    }

    get width(){
        return this._width;
    }

    get area(){
        return this._height * this._height;
    }

}


const rectangle = new Rectangle(7, 5);

rectangle.height = 15;
rectangle.width = 20;

console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area);


class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("your name cannot be empty");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("your name cannot be empty");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("your age cannot be 0")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person("spongebob", "squarepant", 25);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);