const HttpError = require("../models/http-error");

const DUMMY_THINGS = [
  {
    id: "1",
    colName: "thing202203001",
    title: "Silo 1",
  },
];

const getThingByID = (req, res, next) => {
  const thingID = req.params.tid;
  const thing = DUMMY_THINGS.find((t) => {
    return t.id === thingID;
  });

  if (!thing) {
    return next(
      new HttpError("Could not find a thing for the provided ID", 404)
    );
  }

  res.json({ thing });
};

const createThing = (req, res, next) => {
  const { id, colName, title } = req.body;

  const createdThing = {
    id,
    colName,
    title,
  };

  DUMMY_THINGS.push(createdThing);

  res.status(201).json({ thing: createdThing });
};

exports.getThingByID = getThingByID;
exports.createThing = createThing;
