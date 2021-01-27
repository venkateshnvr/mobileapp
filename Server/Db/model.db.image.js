const mongoose =  require('mongoose');


const robotImageModel = new mongoose.Schema({
    robotName: {
        type: String
    },
    english: {
        type: String
    },
    hindi: {
        type: String
    },    
    image: {
        type: String
    },
    video: {
        type: String
    }, 
    gallery:{
        type: String
    }
})

module.exports = mongoose.model('robotImageModel', robotImageModel)