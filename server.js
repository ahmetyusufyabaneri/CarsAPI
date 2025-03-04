const express = require("express");
const {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
} = require("./controllers/index");
const { logger, idControl } = require("./middleware");

const app = express();
const port = 4030;

app.use(logger);

app.use(express.json());

app.route("/api/v1/cars").get(getAllCars).post(createCar);

app
  .route("/api/v1/cars/:id")
  .get(idControl, getCar)
  .patch(idControl, updateCar)
  .delete(idControl, deleteCar);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
