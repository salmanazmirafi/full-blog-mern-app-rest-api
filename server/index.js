const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

// router input
const signup = require("./routes/registration/signup");
const login = require("./routes/registration/login");

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

//
app.use("/signup", signup);
app.use("/login", login);

app.listen(process.env.PROT);
console.log("Server is run");
