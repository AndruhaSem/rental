const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    payment: { type: String, required: true },
    quantity: { type: Number, required: true },
    timeRental: { type: Number, required: true },
    кentalСhoice: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Money", schema);
