function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Yellow");
const car2 = new Car("Chevrolet", "Camaro", 2025, "Red");
const car3 = new Car("Dodge", "Charger", 2026, "Green");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();

function plane(seat, wing, tail, land){
    this.seat = seat;
    this.wing = wing;
    this.tail = tail;
    this.land = land;
}

const plane1 = new plane("airbug", "airtunda", 2025, "white");

console.log(plane1.seat);
console.log(plane1.wing);
console.log(plane1.tail);
console.log(plane1.land);
