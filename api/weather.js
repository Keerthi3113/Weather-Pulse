export default async function handler(req, res) {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");

        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({
            error: "Unable to fetch weather data"
        });
    }
}