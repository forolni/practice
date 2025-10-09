// 1. document.getElemenetById()        // Element Or Null
// 2. document.getElementsClassName()   // HTML Collection
// 3. document.getElementsByTagName()   // HTML Collection
// 4. document.querySelector()          // First Element Or Null
// 5. document.querySelectorsAll()      // NodeList

// elementByID()
const h1Heading = document.getElementById("heading");

h1Heading.style.backgroundColor = "yellow";

// elementClassName()

const elementClass = document.getElementsByClassName("fruits");
// elementClass[2].style.backgroundColor = "orange"
Array.from(elementClass).forEach(fruit => {
    fruit.style.backgroundColor = "orange"
    fruit.style.marginTop = "10px"
    fruit.style.fontSize = "2rem";
    fruit.style.padding = "10px";
    fruit.style.borderRadius = "5px";
})


// elementsByTagName()

const head2H = document.getElementsByTagName("h2");
const vegetables = document.getElementsByTagName("ul");

// tagName[1].style.backgroundColor = "yellow";

for(let head2 of head2H){
    head2.style.backgroundColor = "limeGreen";
}
for(let vegetable of vegetables){
    vegetable.style.backgroundColor = "wheat";
}

// quearySelector()

const button = document.querySelector("button");

button.style.backgroundColor = "red"

// querySelectorsAll()

const foods = document.querySelectorAll(".foods");

// foods[0].style.backgroundColor = "blue";

foods.forEach(food => {
    food.style.backgroundColor = "pink";
    food.style.fontSize = "2rem";
    food.style.padding = "10px";
    food.style.borderRadius = "10px"
    food.style.margin = "10px"
    food.style.fontFamily = "verdana"
})