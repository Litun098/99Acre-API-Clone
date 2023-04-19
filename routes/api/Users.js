const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

router.route("/").get(userControllers.findAllUsers);

// api/users/:id
router
  .route("/:id")
  .get(userControllers.findUserById)
  .put(userControllers.updateUser)
  .delete(userControllers.removeUser);

module.exports = router;
