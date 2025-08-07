import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
dotenv.config();

// console.log(process.env.MONGO_URI);

app.post("/computer", (req, res) => {});

app.get("/computers ", (req, res) => {
  res.send("Hello World!");
  //   console.log("ugjygxs");
});

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});
