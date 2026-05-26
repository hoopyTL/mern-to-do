import express from "express";
import tasksRouters from "./routes/tasksRouters.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use("/api/tasks", tasksRouters);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
  });
});
