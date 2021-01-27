const mongoose =  require('mongoose')

const robotDetailModel = new mongoose.Schema({
    robotName: {
        type: String
    },
    gallery: {
        type: String
    } 
})

module.exports = mongoose.model('roboDetail', robotDetailModel)