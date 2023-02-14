const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    date: { type: Number, required: true },
    deposit: { type: String, required: true },
    name: String,
    payment: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    telephone: String,
    timeRental: { type: Number, required: true },
    кentalСhoice: { type: String, required: true },
    orderNumber: Number,
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);
module.exports = model("Statistics", schema);
