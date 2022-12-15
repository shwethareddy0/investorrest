const { Schema } = require("mongoose");

const propertySchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    unique: true,
  },
  occupancy: {
    type: Number,
    required: true,
  },
  airbnb_properties: {
    type: Number,
    required: true,
  },
  airbnb_rental: {
    type: Number,
    required: true,
  },
  avg_nightly_rate: {
    type: Number,
    required: true,
  },
});

module.exports = propertySchema;
