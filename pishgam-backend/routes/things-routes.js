const express = require("express");

const thingsControllers = require("../controllers/things-controllers");

const router = express.Router();

router.get("/:tid", thingsControllers.getThingByID);
router.post("/", thingsControllers.createThing);

module.exports = router;
