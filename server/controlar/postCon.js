const Post = require("../modules/postModuls");

// Crete post
exports.createPost = async (req, res, next) => {
  const { title, desc, photo, username, category } = req.body;
  try {
    const post = await Post.create({
      title,
      desc,
      photo,
      username,
      category,
    });
    res.status(201).json({
      message: "Post create successful",
      post,
    });
  } catch (error) {
    res.status(400).json({
      message: "Somthing went worng",
    });
  }
};
// all post
exports.allAndQuery = async (req, res) => {
  const { username, category, title } = req.query;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        category: {
          $in: [category],
        },
      });
    } else if (title) {
      posts = await Post.find({ title });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({
      message: "Search Query Result",
      posts,
    });
  } catch (error) {}
};
// update post
exports.updatePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      res.status(400).json({
        message: "Post Not Pound",
      });
    }
    const postUpdate = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Post Update Successful",
      postUpdate,
    });
  } catch (error) {
    res.status(401).json({
      message: "Your can Update your account",
      error,
    });
  }
};
// delete post
exports.deletPost = async (req, res) => {
  const postId = req.params.id;
  try {
    const deletes = await Post.findById(postId);
    if (!deletes) {
      res.status(400).json({
        message: "Post Not Found",
      });
    }
    const postDelet = await Post.findByIdAndRemove(postId);
    res.status(200).json({
      message: "Post Deleted Successful",
      postDelet,
    });
  } catch (error) {
    res.status(401).json({
      message: "Your can Delete your account",
      error,
    });
  }
};
// single post
exports.singlePost = async (req, res) => {
  const singId = req.params.id;
  try {
    const singlePost = await Post.findById(singId);
    if (!singlePost) {
      res.status(401).json({ message: "Post Not Found" });
    }
    res.status(200).json({
      message: "Search Result",
      singlePost,
    });
  } catch (error) {
    res.status(401).json({
      message: "Your can Delete your account",
      error,
    });
  }
};
