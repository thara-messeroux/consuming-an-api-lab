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

/* Start server */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
