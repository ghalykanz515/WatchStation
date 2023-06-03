const express = require("express");
const { newBooking, getBookingById, deleteBooking } = require("../controllers/bookingController");

const bookingRouter = express.Router();

bookingRouter.get("/:id", getBookingById);
bookingRouter.post('/', newBooking);
bookingRouter.delete("/:id", deleteBooking);

module.exports = bookingRouter;