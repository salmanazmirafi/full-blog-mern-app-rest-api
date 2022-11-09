const Category = require("../modules/catagoriModul");

// create category
exports.categoris = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({
      name,
    });
    res.status(200).json({
      message: "Category Create Success",
      category,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went worng",
      error,
    });
  }
};
// get all category
exports.getAllCata = async (req, res) => {
  const { name } = req.query;
  try {
    let category;
    if (name) {
      category = await Category.find({ name });
    } else {
      category = await Category.find();
    }
    res.status(200).json({
      message: "Search Result",
      category,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went worng",
      error,
    });
  }
};
