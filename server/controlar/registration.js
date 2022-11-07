const User = require("../modules/userModel");
const bcrypt = require("bcrypt");
// signup
exports.signup = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { username, email, password, profile, coverpicture } = req.body;
    const user = await User.create({
      username,
      email,
      password,
      profile,
      coverpicture,
    });
    res.status(200).json({
      message: "Congratulations! Your Accounts Successful Create",
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthisg went wong",
    });
  }
};
// login
exports.login = async (req, res) => {
  res.send("I'm login");
};
