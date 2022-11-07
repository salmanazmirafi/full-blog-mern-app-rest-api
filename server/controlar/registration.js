const User = require("../modules/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// signup
exports.signup = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { username, email, password, profile, coverpicture } = req.body;
    const user = await User.create({
      username,
      email: email.toLowerCase(),
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
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        message: "User Not Find",
      });
    }
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      res.status(400).json({
        message: "Password is wong",
      });
    }
    const token = await jwt.sign(
      { username, _id: user._id },
      process.env.PRIVET_KEY,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login Successful",
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthisg went wong",
    });
  }
};
