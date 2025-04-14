const { connectToDatabase, getObjectId } = require('../config/db');

class CategoryModel {
  static async getCollection() {
    const db = await connectToDatabase();
    return db.collection('homeEaseCategories');
  }

  static async getAllCategories() {
    const collection = await this.getCollection();
    return collection.find().toArray();
  }

  static async getCategoryById(id) {
    const collection = await this.getCollection();
    return collection.findOne({ _id: getObjectId(id) });
  }

  static async getCategoryByName(name) {
    const collection = await this.getCollection();
    return collection.findOne({ name });
  }

  static async createCategory(category) {
    const collection = await this.getCollection();
    return collection.insertOne(category);
  }

  static async deleteCategory(id) {
    const collection = await this.getCollection();
    return collection.deleteOne({ _id: getObjectId(id) });
  }

  static async updateCategory(id, updatedData) {
    const collection = await this.getCollection();
    return collection.updateOne(
      { _id: getObjectId(id) },
      { $set: updatedData }
    );
  }
}

module.exports = CategoryModel;