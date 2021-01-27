const express = require('express');
const robotImageModel = require('../Db/model.db.image');
const route = express.Router();


route.post('/robot', async (req, res) => {
    console.log("req", req.body.robotName)
    let roboImageObject = {}
    roboImageObject.robotName = req.body.robotName;
    roboImageObject.english = req.body.english;
    roboImageObject.image = req.body.image;
    roboImageObject.video = req.body.video;
    roboImageObject.hindi =  req.body.hindi;
    roboImageObject.gallery = req.body.gallery;
    let roboImagesModel = new robotImageModel(roboImageObject)
    await roboImagesModel.save(); 
    res.json(roboImageObject)
    res.status(200)
})

route.get('/robot', (req, res) => {
    robotImageModel.find({})
    .then(data => {
        console.log('data', data)
        res.json(data)
    })
})

route.get('/robot/:robotname', (req, res) => {
    robotImageModel.find({robotName: req.params.robotname})
    .then(data => {
        res.json(data)
    })
})

route.get('/exhibits/:gallery', (req, res) => {
    robotImageModel.find({gallery: req.params.gallery})
    .then(data => {
        res.json(data)
    })
})


module.exports = route;

// let conn = mongoose.connection
// let gfs
// conn.once('open', () => {
//     //initialize our stream
//     gfs = Grid(conn.db, mongoose.mongo)
//     gfs.collection('imageUpload')
// })


// let storage = new GridFsStorage({
//   url: connectDb.MongoURI,
//   file: (req, file) => {
//       console.log("file", file)
//       return new Promise(
//           (resolve, reject) => {
//                 const fileInfo = {
//                 filename: file.originalname,
//                 bucketName: "imageUpload"
//               }
//             resolve(fileInfo)
//           }
//       )
//   }
// })

// const upload = multer({storage});upload.single("file"),
