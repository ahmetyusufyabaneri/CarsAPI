const fs = require("fs");

exports.logger = (req, res, next) => {
  console.log(`✅ Request received, Method: ${req.method}, URL: ${req.url}`);

  next();
};

exports.idControl = (req, res, next) => {
  let cars = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
  );

  const car = cars.find((car) => car.id === req.params.id);

  if (!car)
    return res.status(404).json({
      message: "Car not found!",
    });

  req.car = car;

  next();
};
