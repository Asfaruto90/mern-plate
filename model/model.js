// import some dependencies 
const mongoose = require('mongoose');

// generate schema 
const greetingSchema = new mongoose.Schema({
  word: String
});

// make new model 
const greetingModel = new mongoose.model("Greeting",greetingSchema);

// insert some documents
const greeting1 = new greetingModel({ word: "Web Developer" });

// save document
greeting1.save((err,data) => {
  if(err) return console.log('error');

  console.log('success');
});

module.exports = {
  greetingModel,
};