const express = require("express");
const router = express.Router();

const {
  getAllThings,
  getUserThings,
  getCategoryThings,
  createThing,
  updateThing,
  deleteThing,
} = require("../controllers/thingsController");

router.route("/").get(getAllThings);

router.route("/").post(createThing);
router.route("/:id").delete(deleteThing).patch(updateThing);
router.route("/auth/:id").post(getUserThings);
router.route("/category/:id").post(getCategoryThings);

module.exports = router;
