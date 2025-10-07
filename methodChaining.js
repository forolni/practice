
// let username = window.prompt("enter your username: ");

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// let loggedIn = true;
// let username;
// let password;

// do{
//      username = window.prompt("enter your username: ");
//      password = window.prompt("enter your password: ");

//     if(username === "admin" && password === "admin"){
//         console.log("You are logged in!")
//         loggedIn = true;
//     }
//     else{
//         console.log("Invalid credentials! please try agian")
//     } 
// }while(!loggedIn)

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`enter a number between ${minNum} - ${maxNum}`)

    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }
    
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number")
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("too low! try again.")
        }
        else if(guess > answer){
            window.alert("too high! try again.")
        }
        else{
            window.alert(`correct. the answer was ${answer}. It took you ${attempts} attempts.`)
            running = false;
        }
    }
}