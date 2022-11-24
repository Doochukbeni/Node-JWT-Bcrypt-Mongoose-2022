const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  allUser,
  deleteUser,
  getSingleUser,
  updateUser,
} = require("../controllers/user");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(allUser);
router.route("/:id").delete(deleteUser).get(getSingleUser).patch(updateUser);

module.exports = router;
