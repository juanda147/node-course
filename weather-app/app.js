const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

var myArgs = process.argv;

//console.log(myArgs)

if (!myArgs[2]) {
  console.log("No city provided");
} else {
  geocode(myArgs[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
