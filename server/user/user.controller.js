const {
  addUserService,
  updateUserService,
  getUserByIdService,
  getAllUserService,
  deleteUserByIdService,
  getUserByEmailAndPasswordService,
} = require("./user.service");

const addUserController = async (req, res) => {
  try {
    const {
      userName,
      password,
      email,
      firstName,
      lastName,
      age,
      photoUrl,
      createdAt,
    } = req.body;
    const result = await addUserService({
      userName,
      password,
      email,
      firstName,
      lastName,
      age,
      photoUrl,
      createdAt,
    });
    if (result === null) {
      res.status(200).json({ message: "No user were inserted.", ok: false });
    } else {
      res
        .status(200)
        .json({ message: "user inserted successfully.", ok: true });
    }
  } catch (error) {
    return res.json({ error: error?.message ? error.message : error });
  }
};
const deleteUserByIdController = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteResult = await deleteUserByIdService(id);
    if (!deleteResult) {
      res.status(200).json({ message: "User not found.", ok: false });
    } else {
      res.status(200).json({ message: "User deleted successfully.", ok: true });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.query;
    const { fieldsToUpdate } = req.body;
    const result = await updateUserService(id, fieldsToUpdate);
    if (!result) {
      res.status(200).json({ message: "No user were updated.", ok: false });
    } else {
      res.status(200).json({ message: "user updated successfully.", ok: true });
    }
  } catch (error) {
    return res.json({ error: error?.message ? error.message : error });
  }
};
const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await getUserByIdService(id);
    if (data === null) {
      res.status(404).json({ message: "User not found.", ok: false });
    } else {
      res.status(200).json({ data, ok: true });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};
const getUserByEmailAndPasswordController = async (req, res) => {
  try {
    const { email, passowrd } = req.query;
    const data = await getUserByEmailAndPasswordService(email);
    if (data === null) {
      res.status(404).json({ message: "User not found.", ok: false });
    } else {
      res.status(200).json({ data, ok: true });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};
const getAllUserController = async (req, res) => {
  try {
    const response = await getAllUserService();
    if (!response) {
      res.status(200).json({ message: "not Users were found.", ok: false });
    } else {
      res.status(200).json({ data: response, ok: true });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message ? error.message : error });
  }
};

module.exports = {
  addUserController,
  updateUserController,
  getUserByIdController,
  getAllUserController,
  deleteUserByIdController,
  getUserByEmailAndPasswordController,
};
