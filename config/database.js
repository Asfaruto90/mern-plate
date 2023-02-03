// import some dependencies
const mongoose = require('mongoose'); 
const { greetingModel,greetingInsert } = require('../model/model');
require('dotenv').config();

// database env 
const { DB_URL } = process.env;

// connect mongodb
mongoose.connect(DB_URL);

// check mongodb connection
const dbConnection = mongoose.connection;

// send this if success
dbConnection.on('connected', () => {
    console.log("Connection successfully");
});

// send this if not success
dbConnection.on('disconnected', () => {
    console.log("Connection failed");
});

greetingModel;
greetingInsert;

module.exports = {
    dbConnection
};