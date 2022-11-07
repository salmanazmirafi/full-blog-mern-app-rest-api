const { signup } = require("../../controlar/registration");

const router = require("express").Router();

router.post("/", signup);

module.exports = router;
