const express = require("express");
const { logger } = require("./middleware");
const carRoutes = require("./routes/carRoutes");

const app = express();
const port = 4030;

app.use(logger);

app.use(express.json());

app.use(carRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
