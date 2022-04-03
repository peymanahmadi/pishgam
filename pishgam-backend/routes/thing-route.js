const express = require("express");

const thingControllers = require("../controllers/thing-controllers");

const router = express.Router();

router.get("/", thingControllers.setThingValue);
router.get("/:tid", thingControllers.getThingValueByDate);

module.exports = router;
