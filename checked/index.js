const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = "You are Subscribed!"
    }
    else{
        subResult.textContent = "You are NOT Subscribed!"
    }

    if(visaBtn.checked){
        paymentResult.textContent = "YOU are paying with Visa"
    }
    else if(masterBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard"
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = "You are paying with Paypal"
    }
    else{
        paymentResult.textContent = "You must select a payment method"
    }
}
