const CategoryModel = require('../models/categoryModel');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const result = await CategoryModel.getAllCategories();
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await CategoryModel.getCategoryById(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createCategory: async (req, res) => {
    try {
      const category = req.body;
      // Check if category with same name already exists
      const existingCategory = await CategoryModel.getCategoryByName(category.name);
      if (existingCategory) {
        return res.status(400).send({ message: 'Category already exists', insertedId: null });
      }
      const result = await CategoryModel.createCategory(category);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await CategoryModel.deleteCategory(id);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await CategoryModel.updateCategory(id, updatedData);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
};

module.exports = categoryController;