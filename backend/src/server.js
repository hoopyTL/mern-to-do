import express from "express";
import tasksRouters from "./routes/tasksRouters.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDB();
app.use("/api/tasks", tasksRouters);

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
