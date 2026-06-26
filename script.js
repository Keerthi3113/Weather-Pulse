const apiKey = "09852cb7b4ae7b38a7a73afa0ca529e3";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }
});

cityInput.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        searchBtn.click();
    }
});

async function getWeather(city){

    const error = document.getElementById("error");
    const weatherCard = document.getElementById("weatherCard");

    error.textContent = "";
    weatherCard.classList.add("hidden");

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").textContent =
            `${data.main.temp} °C`;

        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;

        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;

        document.getElementById("condition").textContent =
            data.weather[0].main;
            // Weather Icon
const icon = data.weather[0].icon;
document.getElementById("weatherIcon").src =
`https://openweathermap.org/img/wn/${icon}@2x.png`;

// Feels Like
document.getElementById("feels").textContent =
`${data.main.feels_like} °C`;

// Pressure
document.getElementById("pressure").textContent =
`${data.main.pressure} hPa`;

// Visibility
document.getElementById("visibility").textContent =
`${data.visibility / 1000} km`;

// Sunrise
const sunrise = new Date(data.sys.sunrise * 1000);
document.getElementById("sunrise").textContent =
sunrise.toLocaleTimeString();

// Sunset
const sunset = new Date(data.sys.sunset * 1000);
document.getElementById("sunset").textContent =
sunset.toLocaleTimeString();

        weatherCard.classList.remove("hidden");

    }
    catch(err){
        error.textContent = err.message;
    }
}