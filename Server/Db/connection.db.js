const mongoose = require("mongoose");
const Grid = require('gridfs-stream')

const MongoURI = "mongodb+srv://dbuser:dbuser@cluster0.8dogy.mongodb.net/<dbname>?retryWrites=true&w=majority";
const connectDb = async () => {
  await mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("db connected..!"))
  .catch(err => console.log("no connection..!", err));
  
};

module.exports = { 
  connectDb,
  MongoURI
};
