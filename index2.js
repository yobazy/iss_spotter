const { fetchISSFlyOverTimes } = require("./iss_promised")


fetchISSFlyOverTimes()
.then((passTimes) => {
  printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});