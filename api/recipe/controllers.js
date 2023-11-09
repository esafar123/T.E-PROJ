const Recipes = require("../../model/Recipe");

exports.getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipes.find();
    return res.status(200).json(allRecipes);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getOneRecipe= async (req, res) => {
  try {
    const { id } = req.params;
    const Recipe = await Recipes.findById(id);
    return res.status(200).json(Recipe);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipes.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const Recipe = await Recipes.findById(id);
    await Recipe.deleteOne();
    return res.status(204).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const Recipe = await Recipes.findById(id);
    await Recipe.updateOne(req.body);

    return res.status(200).json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
