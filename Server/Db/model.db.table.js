const mongoose = require("mongoose");

const robotTabelModel = new mongoose.Schema({
  table: [
    {
      start: String,
      end: String,
      holiday: String
    }
  ],
  date: {
      type: String
  }

});

module.exports = mongoose.model('robotTabelModel', robotTabelModel)