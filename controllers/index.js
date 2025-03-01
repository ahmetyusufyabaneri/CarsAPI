exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "Cars information received!",
  });
};

exports.createCar = (req, res) => {
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
