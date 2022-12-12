const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const propertySchema = require('./property')

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"],
      },
      password: {
        type: String,
        required: true,
      },
      savedProperties: [propertySchema],
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
  
  const User = model('User', userSchema);
  
  module.exports = User