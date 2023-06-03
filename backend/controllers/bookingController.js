const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const Movie = require("../models/Movie");
const User = require("../models/User");

const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;

    let existingMovie;
    let existingUser;
    try {
        existingMovie = await Movie.findById(movie);
        existingUser = await User.findById(user);
    } catch(err) {
        return console.log(err);
    }

    if (!existingMovie) {
        return res.status(404).json({ message: "Movie Not Found with share ID" });
    }

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    let booking;

    try {
        booking = new Booking({
            movie,
            date: new Date(`${date}`), 
            seatNumber, 
            user,
        });

        const session = await mongoose.startSession();
        session.startTransaction();
        existingUser.bookings.push(booking);
        existingMovie.bookings.push(booking);
        await existingUser.save({ session });
        await existingMovie.save({ session });
        await booking.save({ session });
        session.commitTransaction();

        //booking = await booking.save();
    } catch(err) {
        return console.log(err);
    }

    if (!booking) {
        return res.status(500).json({ message: "Unable to Book" });
    }
    return res.status(201).json({ booking });
};

const getBookingById = async (req, res, next) => {
    const id = req.params.id;
    let booking;
    
    try {
        booking = await Booking.findById(id);
    } catch(err) {
        return console.log(err);
    }

    if (!booking) {
        return res.status(500).json({ message: "Unexpected Error" })
    }
    return res.status(200).json({ booking })
};

const deleteBooking = async (req, res, next) => {
    const id = req.params.id;

    let booking;

    try {
        booking = await Booking.findByIdAndRemove().populate("user movie");
        const session = await mongoose.startSession();
        session.startTransaction();
        await booking.user.bookings.pull(booking);
        await booking.movie.bookings.pull(booking);
        await booking.movie.save({ session });
        await booking.user.save({ session });
        session.commitTransaction();
    } catch(err) {
        return console.log(err);
    }

    if (!booking) {
        return res.status(500).json({ message: "Unable to Delete" });
    }
    return res.status(200).json({ message: "Successfully Delete" });
}

module.exports = { newBooking, getBookingById, deleteBooking };