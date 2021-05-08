const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

app.listen(PORT, function() {
    console.log(`API Server listening on PORT ${PORT}!`);
});