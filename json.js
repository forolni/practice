// JSON.stringify() = converts a js object to a json string.
// JSON>parse() = converts a json string to a js object.

const name = `[ "spongebob", "patrick", "squidward", "sandy" ]`



const person = `{
    "name": "spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
}`

const jsonString = JSON.stringify();

const persedData = JSON.parse(person);

console.log(person);

fetch("jsonPeople.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value)) );