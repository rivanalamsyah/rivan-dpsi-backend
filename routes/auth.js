const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Rute pendaftaran
router.post("/register", async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    await User.create({ username, password, role });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(err);
  }
});
// Rute login
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role },
      "ego",
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
