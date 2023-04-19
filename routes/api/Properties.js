const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

router
  .route("/")
  .get(propertyController.findAllProperties)
  .get(propertyController.createProperty);

router.route("/top/:number").get(propertyController.findTopProperties);

// api/property/:id
router
  .route("/:id")
  .get(propertyController.findPropertyById)
  .put(propertyController.updateProperty)
  .delete(propertyController.removeProperty);

module.exports = router;
