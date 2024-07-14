import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/prover")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Define a schema for the TaskInit event
const taskSchema = new mongoose.Schema({
  deadline: Number,
  cid: Number,
  amount: String,
  data: String,
});

// Create a model for the TaskInit event
export const Task = mongoose.model("Task", taskSchema);
