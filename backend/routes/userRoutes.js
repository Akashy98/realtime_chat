const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  changePassword
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/change-password").post(protect, changePassword);

module.exports = router;
