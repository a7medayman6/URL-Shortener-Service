const mongoose = require('mongoose');
const { isValidURL, generateShortURL, findURL, findShortURL,addURL } = require('../utils/contollerUtills')


// @desc    Get Shortened URL
// @route   GET /api/shorten?url
// @access  private
const getShortenedURL = async (req, res) =>
{   

    const URL_PARAM = req.query.url;
    
    if(!isValidURL(URL_PARAM))
    {
        res.status(400);
        throw new Error('Please provide a URL as a URI Paramater.')
    }

    // Check if it exist in the db
    let dbResponse = await findURL(URL_PARAM);
    let SHORT_URL = dbResponse.url;

    // Create a shortened URL and return it in JSON format
    if(!dbResponse.found)
    {
        SHORT_URL = generateShortURL();
        addURL(URL_PARAM, SHORT_URL)
    }
    
    res.status(200).json( { URL: URL_PARAM, shortenedURL: SHORT_URL } );
}

// @desc    Get Original URL
// @route   GET /api/getOriginal?shortUrl?
// @access  private
const getOriginalURL = async (req, res) =>
{   
    // Check if req.params.url is a vaild URL
    // const SHORT_URL_PARAM = req.params.shortUrl;
    const SHORT_URL_PARAM = req.query.shortUrl;
    
    if(!isValidURL(SHORT_URL_PARAM))
    {
        res.status(400);
        throw new Error('Please provide a valid short URL as a URI Paramater.')
    }

    // Check if it exist in the db
    let dbResponse = await findShortURL(SHORT_URL_PARAM);
    let ORIGINAL_URL = dbResponse.url;

    // Create a shortened URL and return it in JSON format
    if(!dbResponse.found)
        res.status(404).json( { found: false, msg: "The provided short URL is not correct or expired." } );
    else
        res.status(200).json( { found: true, URL: ORIGINAL_URL, shortenedURL: SHORT_URL_PARAM } );
}


module.exports = {
    getShortenedURL,  
    getOriginalURL,  
}