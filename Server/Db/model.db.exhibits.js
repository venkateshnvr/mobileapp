const mongoose =  require('mongoose');


const robotExhibitModel = new mongoose.Schema({
    robotGalleryName: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('robotExhibitModel', robotExhibitModel)