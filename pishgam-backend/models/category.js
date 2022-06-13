const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    things: [{ type: mongoose.Types.ObjectId, ref: "Thing" }],
    subCategories: [{ type: mongoose.Types.ObjectId, ref: "Category" }],
    creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
