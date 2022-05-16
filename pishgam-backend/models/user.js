const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: [{ type: mongoose.Types.ObjectId, ref: "Category" }],
  things: [{ type: mongoose.Types.ObjectId, ref: "Thing" }],
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
