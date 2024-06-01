const express = require("express");
const Customer = require("../models/customer");
const { authenticate } = require("../middleware/auth");
const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const result = await Customer.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", authenticate, async (req, res) => {
  try {
    const result = await Customer.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", authenticate, async (req, res) => {
  try {
    const result = await Customer.findByPk(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", authenticate, async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { customerID: req.params.id },
    });
    if (updated) {
      const updatedCustomer = await Customer.findByPk(req.params.id);
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const result = await Customer.destroy({
      where: { customerID: req.params.id },
    });
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
