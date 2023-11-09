const {Schema,model} = require("mongoose");

const CategorySchema=new Schema({
categoryname: { type: String, required: true },
recipes:[{type:Schema.Types.ObjectId, ref:"Recipe"}]







});
module.exports= model("Category",CategorySchema)