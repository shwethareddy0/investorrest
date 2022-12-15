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
  property_price: {
    type: Number,
    required: false,
  },
  interest_rate: {
    type: Number,
    required: false,
  },
  down_payment: {
    type: Number,
    required: false,
  },
  avg_occupancy: {
    type: Number,
    required: true,
  },
  avg_airbnb_rental: {
    type: Number,
    required: true,
  },
  avg_nightly_price: {
    type: Number,
    required: true,
  },
  avg_airbnb_ROI: {
    type: Number,
    required: true,
  },
  occupency_rate: {
    type: Number,
    required: false,
  },
  nightly_price: {
    type: Number,
    required: false,
  },
  monthly_earnings: {
    type: Number,
    required: false,
  },
  street_address: {
    type: String,
    required: false,
  },
  mortgage: {
    type: Number,
    required: false,
  },
});

module.exports = propertySchema;
