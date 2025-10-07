const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const min = 1;
const max = 6;
let random1;
let random2;
let random3;

myBtn.onclick = function(){
    random1 = Math.floor(Math.random() * 6) + min;
    random2 = Math.floor(Math.random() * 6) + min;
    random3 = Math.floor(Math.random() * 6) + min;
    
    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;

    label4.textContent = random1 + random2 + random3;
}