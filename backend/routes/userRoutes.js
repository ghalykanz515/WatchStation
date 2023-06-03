const express = require("express");
const { 
    getAllUsers, 
    signup, 
    updateUser, 
    deleteUser, 
    login, 
    getBookingsOfUser, 
    getUserById 
} = require("../controllers/userController.js");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);

module.exports = userRouter;