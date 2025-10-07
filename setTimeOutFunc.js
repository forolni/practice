
function sayHello(){
    console.log("Hello")
}


setTimeout(sayHello, 3000);


setTimeout(() => console.log("hello world"), 4000);

let timeOutId;
function startTimer(){
    timeOutId = setTimeout(() => window.alert("Hello"), 3000)
    console.log("Started")
}

function stopTimer(){
    clearTimeout(timeOutId);
    console.log("cleared")
}