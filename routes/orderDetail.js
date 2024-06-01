const express = require("express");
const OrderDetail = require("../models/orderDetail");
const { authenticate } = require("../middleware/auth");
const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const result = await OrderDetail.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", authenticate, async (req, res) => {
  try {
    const result = await OrderDetail.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", authenticate, async (req, res) => {
  try {
    const result = await OrderDetail.findByPk(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "OrderDetail not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", authenticate, async (req, res) => {
  try {
    const [updated] = await OrderDetail.update(req.body, {
      where: { orderDetailID: req.params.id },
    });
    if (updated) {
      const updatedOrder = await OrderDetail.findByPk(req.params.id);
      res.json(updatedOrder);
    } else {
      res.status(404).json({ error: "OrderDetail not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const result = await OrderDetail.destroy({
      where: { orderDetailID: req.params.id },
    });
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "OrderDetail not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
