import express from "express";
import tasksRouters from "./routes/tasksRouters.js";

const app = express();

app.use("/api/tasks", tasksRouters);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
