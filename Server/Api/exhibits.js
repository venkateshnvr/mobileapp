const express = require('express');
const Grid = require('gridfs-stream');
const robotExhibitModel = require('../Db/model.db.exhibits');
const connectDb = require('../Db/connection.db');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const route = express.Router();
const mongoose = require('mongoose');

// let conn = mongoose.connection
// let gfs
// conn.once('open', () => {
//     //initialize our stream
//     gfs = Grid(conn.db, mongoose.mongo)
//     gfs.collection('videoUpload')
// })


// let storage = new GridFsStorage({
//   url: connectDb.MongoURI,
//   file: (req, file) => {
//       console.log("file-------", file)
//       return new Promise(
//           (resolve, reject) => {
//                 const fileInfo = {
//                 filename: file.originalname,
//                 bucketName: "videoUpload"
//               }
//             resolve(fileInfo)
//           }
//       )
//   }
// })

// const upload = multer({ storage });upload.single("file"),

route.post('/gallerys',  async (req, res) => {
    let roboExhibitObject = {}
    roboExhibitObject.robotGalleryName = req.body.robotGalleryName;
    roboExhibitObject.image = req.body.image;
    let robotExhibitsModel = new robotExhibitModel(roboExhibitObject)
    await robotExhibitsModel.save();
    res.json(robotExhibitsModel)
    res.status(200)
})

route.post('/gallerys',  async (req, res) => {
    let roboExhibitObject = {}
    let robotExhibitsModel = new robotExhibitModel(roboExhibitObject)
    await robotExhibitsModel.save();
    res.json(roboExhibitObject)
    res.status(200)
})

route.get('/gallerys', (req, res) => {
    robotExhibitModel.find()
    .then(data => {
        res.send(data)
    })
})


module.exports = route;