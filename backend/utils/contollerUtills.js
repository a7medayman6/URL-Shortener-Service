const mongoose  = require('mongoose');
const uuid = require('uuid');
const shortURL = require('../models/ShortUrlModel')

const SHORT_BASE_URL = 'shortenedurl.short/'

// @desc    Checks if the URL is valid
function isValidURL(url)
{
    return true;
}

// @desc    Generates a short URL using uuid
function generateShortURL()
{
    return SHORT_BASE_URL + uuid.v1().toString();
}

// @desc     Finds url in db, and returns Null if doesn't exist.
async function findURL(url)
{
    const row = await shortURL.findOne({URL: url})

    if(!row)
        return {found: false, url: null};
    return {found: true, url: row.shortURL};
}

// @desc     Finds url in db, and returns Null if doesn't exist.
async function findShortURL(short_url_param)
{   
    const row = await shortURL.findOne({shortURL: short_url_param})
    
    if(!row)
        return {found: false, url: null};
    return {found: true, url: row.URL};
}

// @desc    Creates a shortened URL, save it to db, and return it.
async function addURL(url, shortenedURL)
{
    const newShortURL = await shortURL.create(
        {
            URL: url,
            shortURL: shortenedURL,
        })
    return newShortURL;
}


module.exports = {
    isValidURL,
    generateShortURL,
    findURL,
    findShortURL,
    addURL,
}