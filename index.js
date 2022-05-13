const { object } = require('assert-plus');
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// const ip = "184.64.123.46"

// fetchCoordsByIP(ip, (error, body) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log(body);
// });

const lat = -70;
const long = -170;
const coord = {
  'latitude': lat,
  'longitude': long
};

// fetchISSFlyOverTimes(coord, (error, body) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log(body);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});