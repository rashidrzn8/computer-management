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
      required: true,
      default: "online",
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const Computer = mongoose.model("Computer", computerSchema);
export default Computer;
