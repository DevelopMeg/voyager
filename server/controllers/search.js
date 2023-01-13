const Flight = require("../db/models/flight");
const Hotel = require("../db/models/hotel");
const Car = require("../db/models/car");

const getDayOfWeek = date => {
  return new Date(date)
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
};

exports.getFlights = async (req, res) => {
  try {
    const { from, to, flyDate } = req.query;

    const flightDayOfWeek = getDayOfWeek(flyDate);

    const flights = await Flight.find({
      from,
      to,
      flyingDays: flightDayOfWeek,
    });

    res.status(200).json(flights);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getHotels = async (req, res) => {
  const { city, peopleInRoom, checkIn } = req.query;

  const hotelsDayOfWeek = getDayOfWeek(checkIn);

  try {
    const hotels = await Hotel.find({
      city,
      peopleInRoom,
      availableHotelDays: hotelsDayOfWeek,
    });
    res.status(200).json(hotels);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getCars = async (req, res) => {
  const { city, startRentDate, typeCar, electricCar, transmission, seats } =
    req.query;

  const carsDayOfWeek = getDayOfWeek(startRentDate);

  try {
    const cars = await Car.find({
      city,
      availableRentDays: carsDayOfWeek,
      electricCar: electricCar && electricCar,
      transmission: transmission && transmission,
      seats: seats && seats,
      typeCar: typeCar && typeCar,
    });

    res.status(200).json(cars);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
