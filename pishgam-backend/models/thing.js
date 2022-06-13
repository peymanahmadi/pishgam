const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thingSchema = new Schema(
  {
    colName: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    apiWriteKey: { type: String },
    apiReadKey: { type: String },
    enabled: { type: Boolean, required: true },
    creator: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Thing", thingSchema);
