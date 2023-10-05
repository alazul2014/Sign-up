const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
    res.redirect("/home")
})

router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/index.html"));
})

module.exports = router;