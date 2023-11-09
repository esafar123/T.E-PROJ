const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const Usersroutes = require("./api/user/routes");
const Reciperoutes = require("./api/recipe/routes");
const Categoryroutes = require("./api/category/routes");
const connectDB = require("./database");

app.use("/User", Usersroutes);
app.use("/Recipe", Reciperoutes);
app.use("/Category", Categoryroutes);

connectDB();
app.listen(8000, console.log("app is running in port 8000"));
