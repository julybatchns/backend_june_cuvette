const express = require("express");
const router = express.Router();
const {
  updateUser,
  createUser,
  getUsers,
} = require("../controllers/userController");

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
