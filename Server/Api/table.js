const express = require("express");
const robotTabelModel = require("../Db/model.db.table");
const route = express.Router();

route.post("/tabel", (req, res) => {
  let date = new Date();
  let setdate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let roboTabelObject = {};
  roboTabelObject.date = setdate;
  roboTabelObject.table = req.body.tabel.map(data => {
    return {
      start: data.start,
      end: data.end,
      holiday: data.holiday
    };
  });
  let roboTableModel = new robotTabelModel(roboTabelObject);
  roboTableModel.save();
  res.json(roboTableModel);
  res.status(200);
});

route.get("/tabel/:date", (req, res) => {
  robotTabelModel.find({ date: req.params.date }).then(data => {
    res.json(data);
  });
});

module.exports = route;
