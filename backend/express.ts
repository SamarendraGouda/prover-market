import express from "express";
import bodyParser from "body-parser";

import { Task } from "./mongoose";

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
