const fs = require("fs");
const crypto = require("crypto");
const writeFile = require("../utils/writeFile");

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

  writeFile(cars);

  res.status(201).json({
    message: "New car created!",
    car: newCar,
  });
};

exports.getCar = (req, res) => {
  res.status(200).json({
    message: "Car found!",
    car: req.car,
  });
};

exports.updateCar = (req, res) => {
  res.status(200).json({
    message: "Car updated!",
  });
};

exports.deleteCar = (req, res) => {
  cars = cars.filter((car) => car.id !== req.params.id);

  writeFile(cars);

  res.status(204).json({
    message: "Car deleted!",
  });
};
