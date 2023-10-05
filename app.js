const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const db = require("./src/models/db");
require("dotenv").config();

const app = express();

// Static path
app.use(express.static(path.join(__dirname, "public")));

// Home router
const homeRouter = require("./src/routes/homeRouter")
app.use("/", homeRouter)

// Login router
const loginRouter = require("./src/routes/loginRouter")
app.use("/login", loginRouter)

// Signup router
const signupRouter = require("./src/routes/signupRouter")
app.use("/signup", signupRouter)

// Users router
const usersRouter = require("./src/routes/usersRouter")
app.use("/users", usersRouter)

// Javascript file type
app.use((req, res, next) => {
    res.type('application/javascript');
    next();
});

module.exports = app;