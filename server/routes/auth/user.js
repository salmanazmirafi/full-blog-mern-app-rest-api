const { userUpdate, deleteUser, getAllUser } = require("../../controlar/user");
const { userMiddliewars } = require("../../middlewares/userMiddliewars");
const userRouter = require("express").Router();

// user Update
userRouter.put("/:id", userMiddliewars, userUpdate);
// user Delete
userRouter.delete("/:id", userMiddliewars, deleteUser);
// get all user
userRouter.get("/", userMiddliewars, getAllUser);

module.exports = userRouter;
