const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    users: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
    things: [{ type: mongoose.Types.ObjectId, ref: "Thing" }],
    creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Category", categorySchema);
