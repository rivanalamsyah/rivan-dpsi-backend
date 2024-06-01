const express = require('express');
const router = express.Router();
const Category = require('../models/category'); // Impor model Category
// Endpoint untuk menambahkan kategori baru
router.post('/', async (req, res, next) => {
 try {
 const { categoryName, description } = req.body;
 const newCategory = await Category.create({ categoryName,
description });
 res.status(201).json(newCategory);
 } catch (err) {
 next(err);
 }
});
// Endpoint untuk menampilkan semua kategori
router.get('/', async (req, res, next) => {
 try {
 const categories = await Category.findAll();
 res.json(categories);
 } catch (err) {
 next(err);
 }
});
// Endpoint untuk menampilkan kategori berdasarkan ID
router.get('/:id', async (req, res, next) => {
 try {
 const category = await Category.findByPk(req.params.id);
 if (category) {
 res.json(category);
 } else {
 res.status(404).json({ message: 'Category not found' });
 }
 } catch (err) {
 next(err);
 }
});
// Endpoint untuk memperbarui kategori berdasarkan ID
router.put('/:id', async (req, res, next) => {
    try {
    const { categoryName, description } = req.body;
    const category = await Category.findByPk(req.params.id);
    if (category) {
    category.categoryName = categoryName;
    category.description = description;
    await category.save();
    res.json(category);
    } else {
    res.status(404).json({ message: 'Category not found' });
    }
    } catch (err) {
    next(err);
    }
   });
   // Endpoint untuk menghapus kategori berdasarkan ID
   router.delete('/:id', async (req, res, next) => {
    try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
    await category.destroy();
    res.json({ message: 'Category deleted' });
    } else {
    res.status(404).json({ message: 'Category not found' });
    }
    } catch (err) {
    next(err);
    }
   });
   module.exports = router;