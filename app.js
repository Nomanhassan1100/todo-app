const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Simple To-Do App!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).send("Task is required");
  const todo = { id: todos.length + 1, task };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
