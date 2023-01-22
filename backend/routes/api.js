const express = require('express');

const router = express.Router();

const { getShortenedURL, getOriginalURL } = require('../controllers/apiController')


router.get('/test', (req, res) => 
{
    res.json({ msg: "Working!" });
});

router.get('/shorten/', getShortenedURL);
router.get('/getOriginal/', getOriginalURL)

module.exports = router;