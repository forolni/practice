
function rollDice(){
    const numofDIce = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < numofDIce; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`)
    }
    diceResult.textContent = `dice ${values.join(", ")}`; 
    diceImages.innerHTML = images.join("");
}