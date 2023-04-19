const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");

router.use("/api", apiRoutes);

apiRoutes.use(function (req, res) {
  res.status(404).send("API not found");
});

module.exports = router;
