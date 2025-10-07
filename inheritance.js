// inheritance--

class Animal{
    alive = true;

    eat(){console.log(`this ${this.name} is eating`)}
    sleep(){console.log(`this ${this.name} is sleeping`)}
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){console.log(`this ${this.name} is running`)};
}

class Fish extends Animal{
    name = "fish";
    swim(){console.log(`this ${this.name} is swimming`);}
}

class Hawk extends Animal{
    name = "hawk";
    fly(){console.log(`this ${this.name} is flying`)}
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(`iS this rabbit alive: ${rabbit.alive}`);
rabbit.eat();
rabbit.run();
rabbit.sleep();

console.log(`iS this fish alive: ${fish.alive}`);
fish.eat();
fish.swim();
fish.sleep();

console.log(`iS this hawk alive: ${hawk.alive}`);
hawk.eat();
hawk.fly();
hawk.sleep();


// super keyword--

class AnimalSup{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){console.log(`the ${this.name} moves at a speed of ${speed}mph`)}
}

class RabbitSup extends AnimalSup{
    constructor(name, age, runspeed){
        super(name, age)
        this.runspeed = runspeed;
    }

    run(){
        console.log(`the ${this.name} can run`)
        super.move(this.runspeed);
    }
}

class FishSup extends AnimalSup{
    constructor(name, age, swimspeed){
        super(name, age)
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log(`the ${this.name} can swim`)
        super.move(this.swimspeed);
    }
}

class HawkSup extends AnimalSup{
    constructor(name, age, flyspeed){
        super(name, age)
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`the ${this.name} can fly`)
        super.move(this.flyspeed);
    }
}

const bugsbunny = new RabbitSup("bugsbunny", 1, 25);
const waterfish = new FishSup("waterfish", 2, 18);
const airhawk = new HawkSup("airhawk", 3, 55);

console.log(bugsbunny.name)
console.log(waterfish.name)
console.log(airhawk.name)

bugsbunny.run();
waterfish.swim();
airhawk.fly();