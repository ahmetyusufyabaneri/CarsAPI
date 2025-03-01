const express = require("express");
const app = express();
const {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
} = require("./controllers/index");

const port = 4030;

app.get("/api/v1/cars", getAllCars);

app.post("/api/v1/cars", createCar);

app.get("/api/v1/cars/:id", getCar);

app.patch("/api/v1/cars/:id", updateCar);

app.delete("/api/v1/cars/:id", deleteCar);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
