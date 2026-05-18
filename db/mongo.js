require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();

    console.log("✅ MongoDB Connected");

    db = client.db("DB");
  }

  return db;
}

module.exports = connectDB;