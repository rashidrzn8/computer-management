import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected:", conn.connection.host);
    // conn.connection.host will give you the host of the connected database
    // You can also log other connection details if needed
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure // 0 means success, 1 means failure
  }
};
