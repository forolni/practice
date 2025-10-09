const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// }

// myBox.addEventListener("click", changeColor)

myButton.addEventListener("click", event => {
    if(myBox.style.backgroundColor == "tomato" &&
    myBox.textContent == "OUCH! 🤕"){
    myBox.style.backgroundColor = "lightGreen";
    myBox.textContent = "click me 😃";
    }
    else{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
    }

})

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "don't do it 😨";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightGreen";
    myBox.textContent = "click me 😃";
})


const movingBox = document.getElementById("movingBox");

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    movingBox.style.backgroundColor = "tomato";
    movingBox.textContent = "😨"
})

document.addEventListener("keyup", event => {
    movingBox.style.backgroundColor = "lightblue";
    movingBox.textContent = "😃"
})
document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();
            
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        movingBox.style.top = `${y}px`;
        movingBox.style.left = `${x}px`;
    }
});