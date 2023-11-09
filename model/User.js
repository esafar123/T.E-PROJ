const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  password:{ type: String, required: true },
  Bio: String,
  Birth: Date,
  addCategory:[{ type: Schema.Types.ObjectId, ref: "Category" }],
});
module.exports = model("User", UserSchema);
