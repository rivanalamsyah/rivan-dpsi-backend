// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const upload = require("../middleware/upload");
const { authenticate } = require("../middleware/auth");
// Endpoint untuk mengunggah gambar profil
router.post(
  "/uploadProfilePic",
  authenticate,
  upload.single("profilePic"),
  async (req, res, next) => {
    try {
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.profilePic = req.file.path; // Simpan path gambar ke database
      await user.save();
      res.json({
        message: "Profile picture uploaded successfully",
        filePath: req.file.path,
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
