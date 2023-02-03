// model 
const { greetingModel } = require('../model/model');

// get method
const getAll = async (req,res) => {
    const greetingWord = greetingModel.find({ word: 'Web Developer'});

    res.json(greetingWord);
};

const home = async(req,res) => {
    res.send('hello world');
};

module.exports = {
    getAll,
    home
}