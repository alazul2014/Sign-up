const express = require('express');
const path = require('path');

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

// Listener
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});