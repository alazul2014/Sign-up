const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/easterEgg.html"));
})

router.get("/increibles", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/increibles.html"))
})

router.get("/nino-bravo", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/views/ninoBravo.html"))
})

module.exports = router;