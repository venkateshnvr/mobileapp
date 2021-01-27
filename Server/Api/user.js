const express = require('express');
const roboDetailModel = require('../Db/model.db');
const qrCode = require('qrcode');
var qr = require('qr-image');
const route = express.Router();

// route.get('/check-status', async (req, res) => {
//     // console.log(req.params.p)
//     // if()
//     res.sendStatus('400')
//     res.send("sucess");
// })

route.post('/post', async (req, res) => {
    console.log(req.body)
    const { robotName, gallery } = req.body
    let roboDetailObject = {}
    roboDetailObject.robotName = robotName;
    roboDetailObject.gallery = gallery;
    let roboDetailsModel = new roboDetailModel(roboDetailObject)
    await roboDetailsModel.save(); 
    res.json(roboDetailObject)
})

route.get('/robot/:name', (req, res) => {
    // res.send("sent");
    roboDetailModel.find({robotName: req.params.name})
    .then(data => {
        qrCode.toDataURL(JSON.stringify(data), {errorCorrectionLevel: 'H', version: 12, type: 'image/jpeg'}, (err, url) => {
            console.log(url)
            // if(err) {
            //     console.log(err)
            // } else {
            //     let qr_svg = qr.image(url, { type: 'png', ec_level: 'H', size: 10})
            //     qr_svg.pipe(require('fs').createWriteStream(`${data.robotName}.png`));
                // res.render()
                // )
            // }
        })
        // qrCode.toFile(
        //     `${data[0].robotName}.png`, 
        //     [{ data: new Uint8ClampedArray([253,254,255]), mode: 'byte' }],
        //     {errorCorrectionLevel: 'H', version:9, type: 'image/png'}
        // )
    })
})


module.exports = route;