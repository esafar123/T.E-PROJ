const {Schema,model} = require("mongoose");

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  categorytype: { type: Schema.Types.ObjectId, ref: "Category" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});
module.exports = model("Recipe", RecipeSchema);
