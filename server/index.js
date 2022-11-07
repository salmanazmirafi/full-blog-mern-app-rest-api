const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

// router input
const signup = require("./routes/registration/signup");
const login = require("./routes/registration/login");
const userRouter = require("./routes/auth/user");

// env config
dotenv.config();

// mongoose connect
mongoose.connect(process.env.MY_DATABSE_SERVER, () => {
  console.log("Database Run");
});

// app config
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Registration User
app.use("/signup", signup);
app.use("/login", login);
// user update delete
app.use("/user", userRouter);

app.listen(process.env.PROT);
console.log("Server is run");
