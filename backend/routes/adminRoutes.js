const express = require("express");
const { addAdmin, adminLogin, getAllAdmin, getAdminById } = require("../controllers/adminController");

const adminRouter = express.Router();

adminRouter.get("/", getAllAdmin);
adminRouter.get("/:id", getAdminById);
adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);

module.exports = adminRouter;