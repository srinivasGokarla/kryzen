const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProductScheduled
} = require("../Controllers/ProductController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:username/create", authMiddleware, createProduct);
router.get("/:username", authMiddleware, getAllProducts);
router.put("/:username/:id", authMiddleware, updateProduct);
router.delete("/:username/:id", authMiddleware, deleteProduct);
router.post("/:username/schedule", authMiddleware, createProductScheduled);

module.exports = router;
