const API_URL = "http://127.0.0.1:5000/api/";
const SHORTEN_URL = API_URL + "shorten";
const GET_ORIGINAL_URL = API_URL + "getOriginal";

const Shorten = (url, setShortenedURL) => 
{
    fetch(SHORTEN_URL + '?url=' + url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result:", result)
          setShortenedURL(result.shortenedURL)
        },
        (error) => {
          console.log(error)
        }
      )
}

const Visit = (url, setVisitURL) =>
{
    fetch(GET_ORIGINAL_URL + '?shortUrl=' + url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("result:", result)
        if(result.found)
        {
            console.log("Found", result.found)
            setVisitURL(result.URL)
        }
      },
      (error) => {
        console.log(error)
      }
    )
}

module.exports = {Shorten, Visit};
