const User = require("../modules/userModel");
const jwt = require("jsonwebtoken");
exports.userMiddliewars = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({
        message: "Access not allow",
      });
    }
    const stoken = token.split(" ")[1];
    const dcomed = jwt.verify(stoken, process.env.PRIVET_KEY);
    const id = dcomed.id;
    const user = await User.findById(id);
    res.user = user;

    next();
  } catch (error) {
    res.status(400).json({
      message: "Authanticad Faill",
    });
  }
};
