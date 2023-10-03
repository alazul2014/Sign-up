const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const db = require("./db");
require("dotenv").config();

const app = express();

// Static path
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'public', 'html', "index.html");
    res.sendFile(filePath);
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', "login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'signup.html'));
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

// Listener
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});