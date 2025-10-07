let fruits = ["apple", "orange", "banana", "coconut", "strawberry"]

// fruits.push("mango");
// fruits.pop()
// fruits.unshift("berry");
// fruits.shift()


// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

fruits.sort().reverse();

for(let i = fruits.length - 1; i > 0; i--){
    console.log(fruits[i])
}

for(let fruit of fruits){
    console.log(fruit)
}

let num = [12, 23, 51, 83, 19, 15, 31];

let maximum = Math.max(...num);
let minimum = Math.min(...num);

console.log(maximum);
console.log(minimum);

let name = "olniforge"

let arram = [...name].join("-");

console.log(arram);

let keyboard = ["blackwidow", "ornata", "huntsman", "cynosa"]

let mouse = ["viper", "deathadder", "basilisk", "orochi"]

let razer = [...keyboard, ...mouse, "joro", "cobra"]

console.log(razer);

function games(...games){
    return games;
} 

let play = games("gta vice city", "stronghold legends", "rise of legends", "desperados")

console.log(play.join(" => "))

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function average(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}


let add = sum(1, 34, 1231, 5);
let ave = average(2, 21, 12, 78, 84, 34)

console.log(add);
console.log(ave);


function fruits_s(arry){
arry.forEach(fruit => {
console.log(fruit)
})
}
fruits_s(["Banana","Mango","Orange"]);


