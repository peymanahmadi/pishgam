const getAllThings = (req, res) => {
  res.send("Get All Things");
};

const getUserThings = (req, res) => {
  res.send("Get User Things");
};

const getCategoryThings = (req, res) => {
  res.send("Get Category Things");
};

const createThing = (req, res) => {
  res.send("Create Thing");
};

const updateThing = (req, res) => {
  res.send("Update Thing");
};

const deleteThing = (req, res) => {
  res.send("Delete Thing");
};

module.exports = {
  getAllThings,
  getUserThings,
  getCategoryThings,
  createThing,
  updateThing,
  deleteThing,
};
