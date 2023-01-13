const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  city: String,
  carName: String,
  locationCar: String,
  availableRentDays: [String],
  seats: Number,
  typeCar: String,
  transmission: String,
  electricCar: Boolean,
  airConditioning: Boolean,
  unlimitedMileage: Boolean,
  priceForDay: Number,
});

module.exports = mongoose.model("cars", CarSchema);
