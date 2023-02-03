// import some dependencies
const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');

// import some file
const router = require('./routes/userRoute');
const db = require('./config/database');
require('dotenv').config()

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(process.env.PORT ,() => {
    console.log("server running at http://localhost:3000");
});
