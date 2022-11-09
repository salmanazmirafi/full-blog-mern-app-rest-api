const { categoris, getAllCata } = require("../../controlar/cetagoryCon");
const { userMiddliewars } = require("../../middlewares/userMiddliewars");

const categoryRouter = require("express").Router();

// create category
categoryRouter.post("/", userMiddliewars, categoris);
categoryRouter.get("/", getAllCata);

module.exports = categoryRouter;
