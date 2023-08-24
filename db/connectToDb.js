import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("mongodb.js 6 | db connected!");
    }
  } catch (error) {
    console.log("mongodb.js 9 | error connecting to db");
  }
};

export default connectDB;
