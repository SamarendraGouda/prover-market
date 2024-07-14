import { ethers } from "ethers";

import { Task } from "./mongoose";
import { abi, address, provider } from "./metadata/escrow";

const contract = new ethers.Contract(address, abi, provider);

contract.on("TaskInit", async (task) => {
  console.log("TaskInit event detected:");
  console.log("Deadline:", task.deadline.toString());
  console.log("CID:", task.cid.toString());
  console.log("Amount:", ethers.utils.formatEther(task.amount));
  console.log("Data:", ethers.utils.toUtf8String(task.data));

  // Create a new Task document and save it to the database
  const newTask = new Task({
    deadline: task.deadline.toString(),
    cid: task.cid.toString(),
    amount: ethers.utils.formatEther(task.amount),
    data: ethers.utils.toUtf8String(task.data),
  });

  try {
    await newTask.save();
    console.log("Task saved to MongoDB");
  } catch (error) {
    console.error("Error saving task to MongoDB:", error);
  }
});

console.log("Listening for TaskInit events...");
