const person = {
    name: "Spongebob",
    age: 30,
    hobbies: ["karate", "jellyfishing", "cooking"],
    isStudent: true,
    address: {
        street: "124 Conch St.",
        city: "Bikini bottom",
        country: "Int. Water"
    }
}

for(const property in person.address){
    console.log(person.address[property]);
}

console.log(`His name is ${person.name}`);
console.log(`He is ${person.age} yrs old`);
console.log(`spongebob loves: ${person.hobbies[0]}, ${person.hobbies[1]} and ${person.hobbies[2]}`);
console.log(`is Spongebob a Student: ${person.isStudent ? "yes" : "no"}`);
console.log(`Spongebob lives in:\n street: ${person.address.street} \n city: ${person.address.city} \n country: ${person.address.country}`);


class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", "30", "124 Conch St.",
                                              "bikini Bottom",
                                              "Int. Waters");

const person2 = new Person("Patrick", "34", "128 Conch St.",
                                              "bikini Bottom",
                                              "Int. Waters");

const person3 = new Person("SQuidward", "42", "126 Conch St.",
                                              "bikini Bottom",
                                              "Int. Waters");
                                             

console.log(`Hey my name is ${person1.name}`);
console.log(`I am ${person1.age} yrs old`);
console.log(`I live in \n street: ${person1.address.street} \n city: ${person1.address.city} \n country: ${person1.address.country}`);

console.log(`Hiii I am ${person2.name}`);
console.log(`I am ${person2.age} yrs old`);
console.log(`I live in \n street: ${person2.address.street} \n city: ${person2.address.city} \n country: ${person2.address.country}`);

console.log(`Hmm Im ${person3.name}`);
console.log(`I am ${person3.age} yrs old`);
console.log(`I live in \n street: ${person3.address.street} \n city: ${person3.address.city} \n country: ${person3.address.country}`);