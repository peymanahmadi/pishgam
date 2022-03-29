const express = require("express");

const thingControllers = require("../controllers/thing-controllers");

const router = express.Router();

router.get("/", thingControllers.setThingValue);

module.exports = router;
