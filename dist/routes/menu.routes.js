"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("../controllers/menu.controller");
const router = express_1.default.Router();
router.get("/", menu_controller_1.getMenus);
router.get("/:id", menu_controller_1.getMenuById); // New route to get a menu by ID
router.post("/", menu_controller_1.createMenu);
router.put("/:id", menu_controller_1.updateMenu);
router.delete("/:id", menu_controller_1.deleteMenu);
exports.default = router;
