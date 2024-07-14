import express from "express";
import bodyParser from "body-parser";

import { Task, Complete } from "./mongoose";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks from MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/user/tasks", async (req, res) => {
  try {
    let user: any = req.query.user;
    user = user.toLowerCase();
    const tasks = await Task.find({ user });

    // Find completed tasks
    const completedTasks = await Complete.find({ user });

    // Create a map of completed tasks for quick lookup
    const completedTaskMap = new Map();
    completedTasks.forEach((task) => {
      completedTaskMap.set(task.taskId, task);
    });

    // Build the response
    const response = tasks.map((task) => {
      if (completedTaskMap.has(task.taskId)) {
        return {
          ...task.toObject(),
          status: "completed",
          proof: completedTaskMap.get(task.taskId).proof,
          prover: completedTaskMap.get(task.taskId).prover,
        };
      } else {
        return {
          ...task.toObject(),
          status: "pending",
        };
      }
    });

    res.json(response);
  } catch (error) {
    console.error("Error fetching tasks from MongoDB:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
