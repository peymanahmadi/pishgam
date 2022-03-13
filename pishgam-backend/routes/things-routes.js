const express = require("express");

const thingsControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/:tid", thingsControllers.getThingByID);

module.exports = router;
