const router = require("express").Router();
const UserController = require("../../controllers/userControllers");

router.route("/").post(UserController.createUser);

module.exports = router;
