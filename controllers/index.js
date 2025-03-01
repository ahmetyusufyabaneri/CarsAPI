const fs = require("fs");
const crypto = require("crypto");

let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "Cars information received!",
    results: cars.length,
    cars,
  });
};

exports.createCar = (req, res) => {
  const newCar = { ...req.body, id: crypto.randomUUID() };

  cars.push(newCar);

  res.status(200).json({
    message: "New car created!",
  });
};

exports.getCar = (req, res) => {
  res.status(200).json({
    message: "Car found!",
  });
};

exports.updateCar = (req, res) => {
  res.status(200).json({
    message: "Car updated!",
  });
};

exports.deleteCar = (req, res) => {
  res.status(200).json({
    message: "Car deleted!",
  });
};
