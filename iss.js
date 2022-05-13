const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

// const fetchCoordsByIP  = function(ip, callback)  {
// //   const ip = "184.64.123.46"
//   const url = "https://api.ipbase.com/json/" + ip + "?apikey=fyAmwrkgE41DoJHm0NFyBsHPW31Vv7tZntmSLG9t"

//   request(url, (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode}`), null);
//       return;
//     }
//     const data = {
//       'latitude': JSON.parse(body).latitude,
//       'longitude': JSON.parse(body).longitude
//     }
//     callback(null, data);
//   });
// }

module.exports = { 
  fetchMyIP, 
  fetchCoordsByIP };
