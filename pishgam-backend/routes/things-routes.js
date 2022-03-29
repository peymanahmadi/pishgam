const express = require("express");
const { check } = require("express-validator");

const thingsControllers = require("../controllers/things-controllers");

const router = express.Router();

router.get("/:tid", thingsControllers.getThingByID);
router.get("/user/:uid", thingsControllers.getThingsByUserID);
router.get("/thing/:tid", thingsControllers.setThingValue);
router.post("/", check("title").not().isEmpty(), thingsControllers.createThing);
router.patch("/:tid", thingsControllers.updateThing);
router.delete("/:tid", thingsControllers.deleteThing);

module.exports = router;
