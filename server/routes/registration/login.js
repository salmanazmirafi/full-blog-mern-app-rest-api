const { login } = require("../../controlar/registration");

const routes = require("express").Router();

routes.post("/", login);

module.exports = routes;
