const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUniqueUser,
  handleUpdateUser,
  handleDeleteUser,
} = require("../controller/user");

router.get("/", handleGetAllUsers);
router.post("/", handleCreateNewUser);
router.get("/:id", handleGetUniqueUser);
router.patch("/:id", handleUpdateUser);
router.delete("/:id", handleDeleteUser);

module.exports = router;
