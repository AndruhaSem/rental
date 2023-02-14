const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    product: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Booking", schema);
