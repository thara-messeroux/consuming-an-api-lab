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

        /* get city name */
        const city = response.data.city.name;

        /* full forecast list from API (every 3 hours) */
        const list = response.data.list;

        /* we will collect one forecast per day */
        const daily = [];

        /* loop through the big list */
        for (const item of list) {

            /* choose the 12:00 PM forecast each day */
            if (item.dt_txt.includes("12:00:00")) {
                daily.push({
                    day: moment(item.dt_txt).format("ddd"), /* Mon, Tue, etc */
                    temp: Math.round(item.main.temp),       /* round temperature */
                    description: item.weather[0].description
                });
            }
        }

        /* send clean data to forecast.ejs */
        res.render("forecast", {
            city,
            zip,
            forecast: daily
        });

    } catch (err) {
        res.status(500).send("❌ Could not load forecast. Check ZIP + API key.");
    }
});

/* Start server */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
