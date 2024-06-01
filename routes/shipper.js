const express = require("express");
const { authenticate } = require("../middleware/auth");
const Shipper = require("../models/shipper");
const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const result = await Shipper.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", authenticate, async (req, res) => {
  try {
    const result = await Shipper.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", authenticate, async (req, res) => {
  try {
    const result = await Shipper.findByPk(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Shipper not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", authenticate, async (req, res) => {
  try {
    const [updated] = await Shipper.update(req.body, {
      where: { shipperID: req.params.id },
    });
    if (updated) {
      const updatedShipper = await Shipper.findByPk(req.params.id);
      res.json(updatedShipper);
    } else {
      res.status(404).json({ error: "Shipper not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const result = await Shipper.destroy({
      where: { shipperID: req.params.id },
    });
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Shipper not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
