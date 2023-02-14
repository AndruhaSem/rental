const Bookin = require("../models/Bookin");
const Slider = require("../models/Slider");
const bookingMock = require("../mock/booking.json");
const sliderMock = require("../mock/slider.json");

module.exports = async () => {
  const booking = await Bookin.find();
  if (booking.length !== bookingMock.length) {
    await createInitialEntity(Bookin, bookingMock);
  }
  const slider = await Slider.find();
  if (slider.length !== sliderMock.length) {
    await createInitialEntity(Slider, sliderMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
