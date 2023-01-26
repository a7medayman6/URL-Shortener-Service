const express = require('express');

const router = express.Router();

const auth = require("../middleware/auth");

const { getShortenedURL, getOriginalURL } = require('../controllers/apiController')


router.get('/test', (req, res) => 
{
    res.json({ msg: "Working!" });
});

router.get('/shorten/', [auth], getShortenedURL);
router.get('/getOriginal/', [auth], getOriginalURL)

module.exports = router;