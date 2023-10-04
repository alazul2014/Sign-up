const express = require('express');
const router = express.Router();
const path = require('path');
const db = require("../models/db");

router.use(express.static(path.join(__dirname, "public")));

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

module.exports = router;