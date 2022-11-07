const User = require("../modules/userModel");
const bcrypt = require("bcrypt");

// Update User
exports.userUpdate = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(401).json({
        message: "Worng user",
      });
    }
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const update = await User.findOneAndUpdate(userId, req.body, { new: true });
    res.status(200).json({
      message: "Update your Profile",
      update,
    });
  } catch (error) {
    res.status(400).json({
      message: "You have alrady user",
    });
  }
};
// Delete User
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(401).json({
        message: "Worng user",
      });
    }
    const userDelet = await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User Delete Success",
    });
  } catch (error) {
    res.status(400).json({
      message: "Somthing wet worng",
    });
  }
};
// get all user
exports.getAllUser = async (req, res, next) => {
  try {
    const find = await User.find();
    res.status(200).json({
      message: "get all user",
      find,
    });
  } catch (error) {
    error;
  }
};
