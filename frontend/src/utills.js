const API_URL = "http://127.0.0.1:5000/api/";
const SHORTEN_URL = API_URL + "shorten";
const GET_ORIGINAL_URL = API_URL + "getOriginal";
const OPTIONS = 
{ 
  method: 'GET',
  headers: 
  { 
    'Access-Control-Allow-Origin': 'http://localhost:5000',
    'Accept': 'application/json',
    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzQ3NTkxNjUsImV4cCI6NTI3NDc1OTE2NX0.4-A-8f1jjo-0IgPdLdJ-5kfaAQ6tYLu5ZbNytx7dHbM'
  }
}

const Shorten = (url, setShortenedURL) => 
{
    let FETCH_URL = SHORTEN_URL + '?url=' + url;
    fetch(FETCH_URL, OPTIONS)
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
    let FETCH_URL = GET_ORIGINAL_URL + '?shortUrl=' + url;

    fetch(FETCH_URL, OPTIONS)
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
