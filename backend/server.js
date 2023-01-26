const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors')

const {errorHandler} = require('./middleware/error')
const {connectDB} = require('./config/db')

const authRouter = require("./routes/auth")
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({  extended: false  }));


const corsOptions = 
    {
        origin: 'http://localhost',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

app.options('*', cors()) // include before other routes
app.use("/api/auth", authRouter)
app.use('/api/', require('./routes/api'));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));