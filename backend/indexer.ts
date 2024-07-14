import { ethers } from "ethers";

import { Task, Complete } from "./mongoose";
import { generateProof } from "./circom/prover";
import { abi, address, provider } from "./metadata/escrow";

const contract = new ethers.Contract(address, abi, provider);

contract.on("TaskInit", async (task) => {
  console.log("TaskInit event detected:");
  console.log("Deadline:", task.deadline.toString());
  console.log("CID:", task.cid.toString());
  console.log("Amount:", ethers.utils.formatEther(task.amount));
  console.log("Data:", ethers.utils.toUtf8String(task.data));
  console.log("user:", task.user.toString());
  console.log("taskId:", task.ctr);

  // Create a new Task document and save it to the database
  const newTask = new Task({
    deadline: task.deadline.toString(),
    cid: task.cid.toString(),
    amount: ethers.utils.formatEther(task.amount),
    data: ethers.utils.toUtf8String(task.data),
    user: task.user.toLowerCase(),
    taskId: task.ctr,
  });

  try {
    await newTask.save();
    console.log("Task saved to MongoDB");
  } catch (error) {
    console.error("Error saving task to MongoDB:", error);
  }

  const numbers = task.data.split("_");
  const proof = await generateProof(numbers[0], numbers[1]);
  await contract.completeTask(0, task.ctr.toString(), proof);
});

contract.on("Taskcomplete", async (task) => {
  console.log("Taskcomplete event detected:");
  console.log(task);
  console.log("user:", task.user.toString().toLowerCase());
  console.log("tasId:", task.ctr);
  console.log("proof:", task.proof.toString());
  console.log("proverAddr:", task.prover.toString());

  // Create a new Task document and save it to the database
  const newTask = new Complete({
    proof: ethers.utils.toUtf8String(task.proof),
    user: task.user,
    taskId: task.ctr,
    prover: task.prover,
  });

  try {
    await newTask.save();
    console.log("Task saved to MongoDB");
  } catch (error) {
    console.error("Error saving task to MongoDB:", error);
  }
});

console.log("Listening for TaskInit events...");
