import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Computer from "./models/computer.model.js"; // ✅ MUST be uncommented

dotenv.config();
// connectDb();

const app = express();
app.use(express.json()); // ✅ Middleware for JSON parsing

const startServer = async () => {
  try {
    await connectDb(); // Wait for DB connection
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();

app.get("/", (req, res) => {
  res.send("Welcome to the Computer API");
});

app.post("/api/computer", async (req, res) => {
  console.log("Received body:", req.body);

  const { name, ipAddress, status } = req.body;

  if (!name || !ipAddress || !status) {
    return res.status(400).json({
      success: false,
      message: "Name, IP Address, and Status are required.",
    });
  }

  const newComputer = new Computer({ name, ipAddress, status });

  try {
    await newComputer.save();
    res.status(201).json({
      success: true,
      data: newComputer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create a computer",
      error: error.message,
    });
  }
});
