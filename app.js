const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const db = require("./src/models/db");
require("dotenv").config();

const app = express();

// Static path
app.use(express.static(path.join(__dirname, "public")));

// Main route
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'public', 'views', "index.html");
    res.sendFile(filePath);
});

// Login route
const loginRouter = require("./src/routes/loginRouter")
app.use("/login", loginRouter)

// Signup route
const signupRouter = require("./src/routes/signupRouter")
app.use("/signup", signupRouter)

// Users route
const usersRouter = require("./src/routes/usersRouter")
app.use("/users", usersRouter)

// Javascript file type
app.use((req, res, next) => {
    res.type('application/javascript');
    next();
});

// Listener
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});