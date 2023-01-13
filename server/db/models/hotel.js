const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  city: String,
  country: String,
  peopleInRoom: Number,
  roomType: String,
  bedType: String,
  roomSize: Number,
  hotelStars: Number,
  breakfastIncluded: Boolean,
  bathroomIsInRoom: Boolean,
  airConditioning: Boolean,
  freeWiFi: Boolean,
  cosmeticsSet: Boolean,
  priceForDayPerPerson: Number,
  availableHotelDays: [String],
});

module.exports = mongoose.model("hotels", HotelSchema);
