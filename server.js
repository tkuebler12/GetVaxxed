const express = require("express");
const path = require("path");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Imported Sequelize Connection

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 8080;

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

app.listen(PORT, function() {
    console.log(`API Server listening on PORT ${PORT}!`);
});