import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import menuRoutes from "./routes/menu.routes";
import cors from "cors";
dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/menus", menuRoutes);

export default app;