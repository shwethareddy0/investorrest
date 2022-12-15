const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  //saveProperty
  async saveProperty({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedProperties: body } },
        { new: true, runValidators: true }
      );
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  async getSavedProperties({ user, body }, res) {
    console.log(user);
    try {
      const foundUser = await User.findOne({ _id: user._id });
      res.json(foundUser.savedProperties);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
};
