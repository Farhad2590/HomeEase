const { connectToDatabase, getObjectId } = require('../config/db');

class ServiceModel {
  static async getCollection() {
    const db = await connectToDatabase();
    return db.collection('homeEaseServices');
  }

  static async getAllServices() {
    const collection = await this.getCollection();
    return collection.find().toArray();
  }

  static async getServiceById(id) {
    const collection = await this.getCollection();
    return collection.findOne({ _id: getObjectId(id) });
  }

  static async createService(service) {
    const collection = await this.getCollection();
    return collection.insertOne(service);
  }

  static async deleteService(id) {
    const collection = await this.getCollection();
    return collection.deleteOne({ _id: getObjectId(id) });
  }

  static async updateService(id, updatedData) {
    const collection = await this.getCollection();
    return collection.updateOne(
      { _id: getObjectId(id) },
      { $set: updatedData }
    );
  }
}

module.exports = ServiceModel;