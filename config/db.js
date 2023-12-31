const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

async function connectDB() {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
