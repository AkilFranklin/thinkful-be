const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "http://localhost:5000/constellations";

function getAllNames() {
  axios
    .get(url)
    .then((response) => {
      const constellationNames = response.data.map(
        (constellation) => constellation.name
      );
      console.log(constellationNames);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get(url)
    .then((response) => {
      const constellationNames = response.data.filter(
        (constellation) => constellation.quadrant === quadrant
      );
      console.log(constellationNames);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
