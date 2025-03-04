const fs = require("fs");

module.exports = (cars) => {
  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      if (err) {
        console.log(err);
      }
      return;
    }
  );
};
