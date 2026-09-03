<<<<<<< HEAD
// OpenWeatherMap API Key
const apiKey = "09852cb7b4ae7b38a7a73afa0ca529e3";


// Get HTML elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");


// Search button
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {

        document.getElementById("error").textContent =
            "Please enter a city name.";

        return;
    }

    getWeather(city);
});


// Press Enter to search
cityInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


// Fetch weather data
async function getWeather(city) {

    const error = document.getElementById("error");

    // Clear previous error
    error.textContent = "";


    // Show loading state
    document.getElementById("conditionTop").textContent =
        "Loading weather data...";


    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );


        // Handle API errors
        if (!response.ok) {

            if (response.status === 404) {
                throw new Error("City not found. Please check the city name.");
            }

            if (response.status === 401) {
                throw new Error(
                    "Invalid API key. Please check your OpenWeatherMap API key."
                );
            }

            if (response.status === 429) {
                throw new Error(
                    "Too many requests. Please try again later."
                );
            }

            throw new Error(
                "Unable to fetch weather data. Please try again."
            );
        }


        // Convert response to JSON
        const data = await response.json();


        // City
        document.getElementById("cityName").textContent =
            `${data.name}, ${data.sys.country}`;


        // Weather icon
        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


        // Weather condition
        document.getElementById("conditionTop").textContent =
            data.weather[0].description;


        // Temperature
        document.getElementById("temp").textContent =
            `${Math.round(data.main.temp * 10) / 10} °C`;


        // Humidity
        document.getElementById("humidity").textContent =
            `${data.main.humidity}%`;


        // Wind speed
        document.getElementById("wind").textContent =
            `${data.wind.speed} m/s`;


        // Weather condition
        document.getElementById("condition").textContent =
            data.weather[0].main;


        // Feels like
        document.getElementById("feels").textContent =
            `${Math.round(data.main.feels_like * 10) / 10} °C`;


        // Pressure
        document.getElementById("pressure").textContent =
            `${data.main.pressure} hPa`;


        // Visibility
        document.getElementById("visibility").textContent =
            `${(data.visibility / 1000).toFixed(1)} km`;


        // Sunrise
        document.getElementById("sunrise").textContent =
            formatTime(data.sys.sunrise, data.timezone);


        // Sunset
        document.getElementById("sunset").textContent =
            formatTime(data.sys.sunset, data.timezone);


    }
    catch (err) {

        console.error(err);

        error.textContent = err.message;

        // Reset weather information
        resetWeatherValues();
    }
}


// Format sunrise and sunset time
function formatTime(timestamp, timezoneOffset) {

    // Convert Unix timestamp to milliseconds
    const utcMilliseconds = timestamp * 1000;


    // Add timezone offset
    const localMilliseconds =
        utcMilliseconds + (timezoneOffset * 1000);


    const date = new Date(localMilliseconds);


    let hours = date.getUTCHours();

    const minutes =
        String(date.getUTCMinutes()).padStart(2, "0");


    const seconds =
        String(date.getUTCSeconds()).padStart(2, "0");


    const period = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;


    return `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${period}`;
}


// Reset dashboard
function resetWeatherValues() {

    document.getElementById("cityName").textContent =
        "Search for a city";


    document.getElementById("conditionTop").textContent =
        "Current Weather";


    // Default weather icon
    document.getElementById("weatherIcon").src =
        "https://openweathermap.org/img/wn/01d@2x.png";


    document.getElementById("temp").textContent =
        "--";


    document.getElementById("humidity").textContent =
        "--";


    document.getElementById("wind").textContent =
        "--";


    document.getElementById("condition").textContent =
        "--";


    document.getElementById("feels").textContent =
        "--";


    document.getElementById("pressure").textContent =
        "--";


    document.getElementById("visibility").textContent =
        "--";


    document.getElementById("sunrise").textContent =
        "--";


    document.getElementById("sunset").textContent =
        "--";
=======
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
>>>>>>> ddb0798e7672db83334c60471f05afc8e809e59e
}