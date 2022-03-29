const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const thingSchema = new Schema(
  {
    colName: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    categories: [{ type: mongoose.Types.ObjectId, ref: "Category" }],
    enabled: { type: Boolean, required: true },
    dataLifeCycle: { type: Number, required: true },
    creator: { type: String, required: true },
    users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

thingSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Thing", thingSchema);
