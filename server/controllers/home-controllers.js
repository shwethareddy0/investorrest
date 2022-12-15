const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  //saveProperty
  async saveProperty({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedProperties: body } }
      );
      res.json(updatedUser);
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
  async deleteProperty(obj, res) {
    const { user, body, params } = obj;
    try {
      const _user = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedProperties: { _id: params.id } } }
      );
      const foundUser = await User.findOne({ _id: user._id });

      res.json(foundUser.savedProperties);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
};
