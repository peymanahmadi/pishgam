const express = require("express");

const thingsControllers = require("../controllers/things-controllers");

const router = express.Router();

router.get("/:tid", thingsControllers.getThingByID);
router.get("/:uid", thingsControllers.getThingsByUserID);
router.post("/", thingsControllers.createThing);
router.patch("/:tid", thingsControllers.updateThing);
router.delete("/:tid", thingsControllers.deleteThing);

module.exports = router;
