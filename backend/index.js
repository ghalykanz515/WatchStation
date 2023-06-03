const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");
const movieRouter = require("./routes/movieRoutes");
const bookingRouter = require("./routes/bookingRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/movie", movieRouter);
app.use("/api/booking", bookingRouter);

mongoose.connect(process.env.MONGODB).then(() => {
    app.listen(3001, () => {
        console.log(`Database is Connected and Localhost is running on Port ${3001}`);
    })
}).catch((e) => console.log(e));
