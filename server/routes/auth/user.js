const { userUpdate, deleteUser, getAllUser } = require("../../controlar/user");
const userRouter = require("express").Router();

// user Update
userRouter.put("/:id", userUpdate);
// user Delete
userRouter.delete("/:id", deleteUser);
// get all user
userRouter.get("/all", getAllUser);

module.exports = userRouter;
