const { mongoose } = require("mongoose");
const Movie = require("../models/Movie");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

const addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];

    if (!extractedToken && extractedToken.trim() === "") {
        return res.status(404).json({ message: "Token Not Found" });
    }

    let adminId;

    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
        if (err) {
            return res.status(400).json({ message: `${err.message}` });
        } else {
            adminId = decrypted.id;
            return;
        }
    });

    const { title, synopsis, genre, releaseDate, imageUrl, featured } = req.body;

    if (!title && title.trim() === "" && !synopsis && synopsis.trim() === "" && !imageUrl && imageUrl.trim() === "") {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    let movie;
    try {
        movie = new Movie({
            title,
            synopsis,
            genre,
            releaseDate: new Date(`${releaseDate}`),
            imageUrl,
            featured,
            admin: adminId
        });

        const session = await mongoose.startSession();
        const adminUser = await Admin.findById(adminId);
        session.startTransaction();
        await movie.save({ session })
        adminUser.addedMovies.push(movie);
        await adminUser.save({ session });
        await session.commitTransaction();
        //movie = await movie.save();
    } catch (err) {
        return console.log(err);
    }

    if (!movie) {
        return res.status(500).json({ message: "Requested Failed" });
    }
    return res.status(201).json({ movie });
};

const getAllMovies = async (req, res, next) => {
    let movies;

    try {
        movies = await Movie.find();
    } catch(err) {
        return console.log(err);
    }

    if (!movies) {
        return res.status(500).json({ message: "Request Failed" });
    }
    return res.status(200).json({ movies });
};

const getMovieById = async (req, res, next) => {
    const id = req.params.id;
    let movie;

    try {
        movie = await Movie.findById(id);
    } catch(err) {
        return console.log(err);
    }

    if (!movie) {
        return res.status(404).json({ message: "Invalid Movie ID" });
    }
    return res.status(200).json({ movie });
}

module.exports = { 
    addMovie, 
    getAllMovies, 
    getMovieById 
};