const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://rafiadzamankhan512:asc9OcwSprVKmT8P@cluster0.7ddpro2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToDatabase() {
  if (db) return db;
  try {
    await client.connect();
    db = client.db('homeEase');
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

function getObjectId(id) {
  return new ObjectId(id);
}

module.exports = { connectToDatabase, getObjectId };