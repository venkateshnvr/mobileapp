const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./Db/connection.db");
// const aws = require('aws-sdk');
// const s3 = new aws.s3();

// let parama = {
//   Bucket: "robotvideos"
// }
connectDb.connectDb(); // Database connection
const app = express(); 
// const qrcode = require('./Api/user')
// app.use(express.urlencoded({limit: '500mb'}));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use(bodyParser.json());
app.use("/feedback", require("./Api/form.api"));
app.use("/user", require("./Api/user"));
app.use("/robots", require("./Api/images"));
app.use("/exhibits", require("./Api/exhibits"));
app.use("/tabels", require("./Api/table"));


// Server connection
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`server is running port: ${port} ...!`);
});
