const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

app.listen(2000);
console.log("Server is run");
