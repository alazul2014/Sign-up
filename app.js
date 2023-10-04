const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const db = require("./src/models/db");
require("dotenv").config();

const app = express();

// Static path
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'public', 'views', "index.html");
    res.sendFile(filePath);
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', "login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'signup.html'));
});

app.get("/user_creation.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'models', 'user_creation.js'));
});

app.get("/usrs", (req, res) => {
    db.query("SELECT * FROM usuarios", (error, result, fields) => {
        if (error) {
            console.error("Error while querying database: ", error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(result);
        }
    });
});

// Javascript file type
app.use((req, res, next) => {
    res.type('application/javascript');
    next();
});

// Listener
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});