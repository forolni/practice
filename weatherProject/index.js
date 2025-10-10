const cityInput = document.querySelector(".cityInput");
const weatherForm = document.querySelector(".weatherForm");
const card = document.querySelector(".card");

const apiKey = "052d21af535f67f65978764de9994fbb";

weatherForm.addEventListener("submit", async event =>
{
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }

        catch(error){
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
}
);

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl)

    if(!response.ok){
        throw new Error("could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const desDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    tempDisplay.classList.add("tempDisplay");

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");

    desDisplay.textContent = description;
    desDisplay.classList.add("desDisplay");

    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add("emojiDisplay");
    
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(desDisplay);
    card.appendChild(emojiDisplay);
}

function getWeatherEmoji(weatherId){
    
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
            break;
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
            break;        
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
            break;        
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
            break;        
        case (weatherId >= 700 && weatherId < 800):
            return "🌪️";
            break;        
        case (weatherId === 800):
            return "☀️";
            break;        
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
            break;
        default:
            return "❔";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message.toString();
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
