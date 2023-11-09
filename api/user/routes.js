const express = require("express");
const {
    getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser
} = require("./controllers");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id",  getOneUser);
router.post("/",createUser);
router.delete("/:id",deleteUser);
 router.put("/:id", updateUser);

module.exports = router;
