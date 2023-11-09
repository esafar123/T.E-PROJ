const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
    
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DataBase");
        } 
        catch(error){
            console.log(" Does not Connected to DataBase");
        }
    
  };
  
  
  module.exports = connectDB;