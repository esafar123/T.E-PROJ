const Categories = require("../../model/Category");

exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Categories.find();
    return res.status(200).json(allCategories);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getOneCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await Categories.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Categories.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.findById(id);
    await category.deleteOne();
    return res.status(204).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Categories.findById(id);
    await category.updateOne(req.body);

    return res.status(200).json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
