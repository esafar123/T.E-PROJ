const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  password: { type: String, required: true },
  Bio: String,
  Birth: { type: Date, required: true, trim: true },
  age: { type: Number, min: 19 },
  addCategory: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});
module.exports = model("User", UserSchema);
