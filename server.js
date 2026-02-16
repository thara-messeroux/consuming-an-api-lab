require('dotenv').config(); /* loads .env into process.env */
const express = require('express'); /* web server framework */
const app = express(); /* create app instance */

app.get('/', (req, res) => {
    res.send("Hello World! 😊"); /* test response */
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
