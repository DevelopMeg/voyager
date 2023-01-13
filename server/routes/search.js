const express = require("express");
const router = express.Router();

const { getFlights, getHotels, getCars } = require("../controllers/search");

router.get("/flights", getFlights);
router.get("/hotels", getHotels);
router.get("/cars", getCars);

module.exports = router;
