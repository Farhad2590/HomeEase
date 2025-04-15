const { connectToDatabase, getObjectId } = require('../config/db');

class UserModel {
  static async getCollection() {
    const db = await connectToDatabase();
    return db.collection('homeEaseUsers');
  }

  static async getAllUsers() {
    const collection = await this.getCollection();
    return collection.find().toArray();
  }

  static async getUserByEmail(email) {
    const collection = await this.getCollection();
    return collection.findOne({ email });
  }

  static async getUserById(id) {
    const collection = await this.getCollection();
    return collection.findOne({ _id: getObjectId(id) });
  }

  static async createUser(user) {
    const collection = await this.getCollection();
    return collection.insertOne(user);
  }

  static async deleteUser(id) {
    const collection = await this.getCollection();
    return collection.deleteOne({ _id: getObjectId(id) });
  }

  static async updateUserRole(email, role) {
    const collection = await this.getCollection();
    return collection.updateOne(
      { email },
      { $set: { role } }
    );
  }

  static async checkAdminStatus(email) {
    const collection = await this.getCollection();
    const user = await collection.findOne({ email });
    return { admin: user?.role === 'admin' };
  }

  static async checkProviderStatus(email) {
    const collection = await this.getCollection();
    const user = await collection.findOne({ email });
    return { provider: user?.role === 'provider' };
  }
}

module.exports = UserModel;