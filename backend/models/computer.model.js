import mongoose from "mongoose";

const computerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Computer", computerSchema);
export default Product;
