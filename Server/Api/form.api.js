const express = require('express');
const feedbackModel = require('../Db/model.db.form');
const route = express.Router();

route.post('/post', async (req, res) => {
    let feedbackObject = {}
    feedbackObject.name = req.body.name;
    feedbackObject.email = req.body.email;
    feedbackObject.message = req.body.message;
    let feedbackSave = new feedbackModel(feedbackObject)
    await feedbackSave.save(); 
    res.json(feedbackObject);
})

module.exports = route;

