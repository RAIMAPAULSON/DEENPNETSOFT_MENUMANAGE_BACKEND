import express from "express";
import { getMenus, createMenu, updateMenu, deleteMenu, getMenuById } from "../controllers/menu.controller";

const router = express.Router();

router.get("/", getMenus);
router.get("/:id", getMenuById); // New route to get a menu by ID

router.post("/", createMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);


export default router;