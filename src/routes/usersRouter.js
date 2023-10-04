const express = require('express');
const router = express.Router();
const path = require('path');
const db = require("../models/db");

router.use(express.static(path.join(__dirname, "public")));
router.use(express.json)

router.get("/", (req, res) => {
    db.query("SELECT * FROM usuarios", (error, result, fields) => {
        if (error) {
            console.error("Error while querying database: ", error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(result);
        }
    });
})

router.post('/create-user', (req, res) => {
    const { nombre, email, password, phoneNumber } = req.body;

    db.query("INSERT INTO usuarios (nombre, email, password, phone_number) VALUES (", nombre, ", ", email, ", ", password, ", ", phoneNumber, ")", (error, result, fields) => {
        if (error) {
            console.error("Error creating a new user: ", error);
        } else {
            console.log("User created successfully!");
        }
    });
});

module.exports = router;