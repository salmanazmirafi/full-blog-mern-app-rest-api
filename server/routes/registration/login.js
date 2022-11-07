const { login } = require("../../controlar/registration");

const routes = require("express").Router();

routes.get("/", login);

module.exports = routes;
