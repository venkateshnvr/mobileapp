const mongoose =  require('mongoose');


const feedbackModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('feedbackModel', feedbackModel)