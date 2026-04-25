import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      family: 4, // forces IPv4
    });

    console.log("✅ DB connected");
  } catch (error) {
    console.log("❌ DB error:", error.message);
    process.exit(1);
  }
};

export default connectDB;