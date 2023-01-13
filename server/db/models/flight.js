const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  from: String,
  fromAirport: String,
  fromCountry: String,
  to: String,
  toAirport: String,
  toCountry: String,
  startFlight: String,
  endFlight: String,
  flightTime: Number,
  flyingDays: [String],
  price: Number,
  airLine: String,
  flightNumber: String,
});

module.exports = mongoose.model("flights", FlightSchema);
