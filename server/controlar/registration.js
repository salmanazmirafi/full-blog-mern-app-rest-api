const User = require("../modules/userModel");
// signup
exports.signup = async (req, res, next) => {
  try {
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
  } catch (error) {}
};
// login
exports.login = async (req, res) => {
  res.send("I'm login");
};
