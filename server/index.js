const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");

// router input
const signup = require("./routes/registration/signup");
const login = require("./routes/registration/login");
const userRouter = require("./routes/auth/user");
const postRouter = require("./routes/post/posts");
const categoryRouter = require("./routes/cetagory/catagorys");

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

// file uploads
const uploadStoreg = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: uploadStoreg });

// Uploads file
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  const fileInfo = req.file;
  res.status(200).json({
    message: "File Uploads Successful",
    fileInfo,
  });
});

// Registration User
app.use("/signup", signup);
app.use("/login", login);
// user update delete
app.use("/user", userRouter);
// post
app.use("/post", postRouter);
// category
app.use("/category", categoryRouter);

app.listen(process.env.PROT);
console.log("Server is run");
