const axios = require("axios");
const moment = require("moment");

require("dotenv").config(); /* load environment variables */

const express = require("express");
const path = require("path");

const app = express();

/* Configure EJS and views folder */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Enable form data parsing */
app.use(express.urlencoded({ extended: true }));

/* Home route */
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/forecast", async (req, res) => {
    try {
        const zip = req.body.zip; /* get zip from form */
        const apiKey = process.env.OPENWEATHER_API_KEY; /* secret key from .env */

        /* call OpenWeather 5-day forecast endpoint */
        const url = "https://api.openweathermap.org/data/2.5/forecast";
        const response = await axios.get(url, {
            params: {
                zip: `${zip},us`,
                units: "imperial",
                appid: apiKey,
            },
        });

        /* temporary: show a tiny proof it worked */
        const cityName = response.data.city.name;
        const firstItem = response.data.list[0];
        const time = moment(firstItem.dt_txt).format("ddd hA");
        const temp = firstItem.main.temp;

        res.send(`✅ Forecast loaded for ${cityName}. First slot: ${time}, ${temp}°F`);
    } catch (err) {
        res.status(500).send("❌ Could not load forecast. Check ZIP + API key.");
    }
});

/* Start server */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
