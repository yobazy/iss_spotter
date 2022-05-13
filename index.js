const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

const ip = "184.64.123.46"

fetchCoordsByIP(ip, (error, body) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log(body);
});