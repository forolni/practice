const inputString = "no*man";
let secretWord = '';
for (let i = 0; i < inputString.length; i++) {
const character = inputString[i];
if (character != '*') {
secretWord += character;
}
}
if (inputString.includes('*')) {
}
console.log(secretWord);