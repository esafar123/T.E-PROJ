const Users = require("../../model/User");

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await Users.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    await user.deleteOne();
    return res.status(204).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);
    await user.updateOne(req.body);

    return res.status(200).json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
