const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// Create a new category
router.post('/', categoryController.createCategory);

// Delete a category
router.delete('/:id', categoryController.deleteCategory);

// Update a category
router.put('/:id', categoryController.updateCategory);

module.exports = router;