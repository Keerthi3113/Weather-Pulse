# 🌤️ WeatherPulse - Real-Time Weather Dashboard

A responsive weather dashboard built using **HTML, CSS, and JavaScript** that fetches real-time weather data from the **OpenWeatherMap REST API** through a secure serverless API.

## 🚀 Live Demo

🔗 **Live Demo:** https://weather-pulse-khaki.vercel.app/

## 📖 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 💧 View humidity and atmospheric pressure
- 🌬️ Display wind speed
- ☁️ View current weather condition with weather icons
- 🤗 Display feels-like temperature
- 👀 Show visibility
- 🌅 Display sunrise and sunset times
- 🌍 Display city and country information
- ⚡ Fetch real-time weather data using Fetch API and Async/Await
- 🔐 Keep the OpenWeatherMap API key on the server side
- ❌ Handle invalid city names and API errors
- 📱 Responsive and user-friendly interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Async/Await
- JSON
- OpenWeatherMap REST API
- Vercel Serverless Functions
- Git & GitHub

## 🔄 How It Works

    User enters city
           ↓
    JavaScript sends request
           ↓
    Vercel Serverless API
           ↓
    OpenWeatherMap API
           ↓
    Weather data returned
           ↓
    Dashboard updates

The OpenWeatherMap API key is stored as a **server-side environment variable** and is not exposed in the frontend code.

## 📂 Project Structure

    WeatherPulse/
    │
    ├── api/
    │   └── weather.js
    ├── index.html
    ├── style.css
    ├── script.js
    ├── vercel.json
    ├── .gitignore
    └── README.MD

## ⚙️ Getting Started

### 1. Clone the repository

    git clone https://github.com/Keerthi3113/Weather-Pulse.git

### 2. Navigate to the project folder

    cd Weather-Pulse

### 3. Configure the API key

Create a local `.env` file:

    OPENWEATHER_API_KEY=YOUR_API_KEY

The API key is stored as a server-side environment variable and is not included in the frontend code.

### 4. Run the project

Deploy the project through Vercel with the `OPENWEATHER_API_KEY` environment variable configured.

## 📚 Learning Outcomes

- Working with RESTful APIs
- Using the Fetch API
- Asynchronous JavaScript with Async/Await
- Parsing JSON data
- DOM Manipulation
- Event Handling
- Error Handling using `try...catch`
- Working with serverless API functions
- Protecting API credentials
- Building Responsive Web Interfaces
- Deploying a web application using Vercel

## 🔮 Future Improvements

- 📅 5-Day Weather Forecast
- 📍 Current Location Weather
- 🌙 Dark Mode
- 🌡️ Temperature Unit Toggle (°C/°F)
- 🎨 Dynamic Weather Backgrounds
- ⏳ Loading Animation

## 👨‍💻 Author

**Guna Lalitha Keerthi Inavalli**

- GitHub: https://github.com/Keerthi3113
- Live Demo: https://weather-pulse-khaki.vercel.app/

---

⭐ If you found this project useful, please consider giving it a Star!
