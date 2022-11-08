const {
  createPost,
  allAndQuery,
  updatePost,
  deletPost,
  singlePost,
} = require("../../controlar/postCon");
const { userMiddliewars } = require("../../middlewares/userMiddliewars");

const postRouter = require("express").Router();
// crete post
postRouter.post("/", userMiddliewars, createPost);
// all post query
postRouter.get("/", allAndQuery);
// single post query
postRouter.get("/:id", singlePost);
// update post
postRouter.put("/:id", userMiddliewars, updatePost);
// delete post
postRouter.delete("/:id", userMiddliewars, deletPost);

module.exports = postRouter;
