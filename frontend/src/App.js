import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";

import { Shorten, Visit } from "./utills";
import HttpIcon from '@mui/icons-material/Http';

function App() 
{
  // States
  const [URL, setURL] = useState("google.com");
  const [shortenedURL, setShortenedURL] = useState("");
  const [visitURL, setVisitURL] = useState("");


  // OnClicks
  const handleShortenOnClick = () => 
  {
      if(URL)
      {
        Shorten(URL, setShortenedURL);
      }
  }

  const handleVisitOnClick = () => 
  {
      console.log(URL)
      if(URL)
      {
        Visit(URL, setVisitURL);
      }
  }

  useEffect(() =>
  {
      console.log("visit URL", visitURL)
      if(visitURL)
        window.open(visitURL, '_blank');
  }, [visitURL])

  

  return (
    <>
    
      <AppBar 
        position='static'
        color='transparent'>

        <Toolbar disableGutters>

            <HttpIcon 
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, ml: 2 }}  
              fontSize='large'
              />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              URL SHORT
            </Typography>
        </Toolbar>
      </AppBar>

      <Grid 
        container 
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', maxWidth: '200vh' }} >

        <Grid item xs={12}>
          <TextField 
                id="outlined-basic" 
                variant="outlined" 
                label="URL" 
                fullWidth
                sx={{ width: 600 }}
                onChange={(e) => setURL(e.target.value)}
                placeholder="Enter a long URL to shorten, or a short URL to visit .." />
        </Grid>

        <Grid item xs={8}>
          <Button 
              variant="contained"
              sx={{ m:2, width:200 }}
              onClick={handleShortenOnClick}>
                Shorten
          </Button>

          <Button 
              variant="contained"
              color="success"
              sx={{ m:2, width:200 }}
              onClick={handleVisitOnClick}>
                Visit
          </Button>
        </Grid>

        <Grid item xs={8}>
          <TextField 
            id="outlined-basic" 
            label="Short URL" 
            variant="outlined"
            fullWidth
            InputProps={{readOnly: true}}
            sx={{ width: 600 }}
            value={shortenedURL} 
            />
        </Grid>

      </Grid>
    
    
    </>
      
  );
}

export default App;
