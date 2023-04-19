const express = require("express");
const router = express.Router();
const registerRoutes = require("./Register");
const userRoutes = require("./Users");
const propertyRoutes = require("./Properties");

router.use("/register", registerRoutes);
router.use("/users", userRoutes);
router.use("/property", propertyRoutes);

module.exports = router;
