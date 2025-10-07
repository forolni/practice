const passwordLength = 7;
const includeUppercase = true;
const incluedLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generate(length, uppercase, lowercase, numbers, symbols){
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const numbersChars  = "0123456789"
    const symbolsChars = "!@#$%^&*,.?_-+"

    let allowedChars = "";
    let password = "";

    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += numbers ? numbersChars : "";
    allowedChars += symbols ? symbolsChars : ""; 

    if(length <= 6){
        return "(password length must be at least 6)"
    }

    if(allowedChars.length == 0 ){
        return "please select at least 1 character"
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }
        return password; 
}

let password = generate(passwordLength, includeUppercase, incluedLowercase, includeNumbers, includeSymbols);

console.log(password)