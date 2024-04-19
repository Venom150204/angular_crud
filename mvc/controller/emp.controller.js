const express = require("express");

const playerModel = require("../model/emp.model");

const greet = async (req, res) => {
  res.send("Welcome");
};

const addPlayer = async (req, res) => {
  const data = req.body;
  console.log(data);
  const playerData = new playerModel(data);
  const result = await playerData.save();
  console.log(result);
  res.send("successfully added player");
};

const updatePlayer = async (req, res) => {
  const id = req.params.id;
  const { name, wages } = req.body;
  const updateData = await playerModel.updateOne(
    { id: id },
    { $set: { name: name, wages: wages } }
  );
  console.log(updateData);
  res.send("successfully updated player");
};

const deletePlayer = async (req, res) => {
  const id = req.params.id;
  const deleteData = await playerModel.deleteOne({ id: id });
  console.log(deleteData);
  res.send("successfully delete player");
};

const showPlayer = async (req, res) => {
  const showData = await playerModel.find();
  console.log(showData);
  res.send(showData);
};

const showbyIDPlayer = async (req, res) => {
  const id = req.params.id;
  const showbyIDPlayer = await playerModel.find({ id: id });
  console.log(showbyIDPlayer);
  res.send(showbyIDPlayer);
};

module.exports = {
  greet,
  showPlayer,
  showbyIDPlayer,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
