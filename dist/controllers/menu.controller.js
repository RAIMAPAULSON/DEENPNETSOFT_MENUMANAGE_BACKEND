"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu = exports.updateMenu = exports.createMenu = exports.getMenuById = exports.getMenus = void 0;
const menu_model_1 = require("../model/menu.model");
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Get all menus
 */
const getMenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield menu_model_1.Menu.find();
        res.json(menus);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching menus", error });
    }
});
exports.getMenus = getMenus;
/**
 * Get a single menu by ID
 */
const getMenuById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid menu ID" });
            return;
        }
        const menu = yield menu_model_1.Menu.findById(id);
        if (!menu) {
            res.status(404).json({ message: "Menu not found" });
            return;
        }
        res.json(menu);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving menu", error });
    }
});
exports.getMenuById = getMenuById;
/**
 * Create a new menu
 */
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = new menu_model_1.Menu(req.body);
        yield menu.save();
        res.status(201).json(menu);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating menu", error });
    }
});
exports.createMenu = createMenu;
/**
 * Update a menu by ID
 */
const updateMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid menu ID" });
            return;
        }
        const updatedMenu = yield menu_model_1.Menu.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMenu) {
            res.status(404).json({ message: "Menu not found" });
            return;
        }
        res.json(updatedMenu);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating menu", error });
    }
});
exports.updateMenu = updateMenu;
/**
 * Delete a menu by ID
 */
const deleteMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid menu ID" });
            return;
        }
        const deletedMenu = yield menu_model_1.Menu.findByIdAndDelete(id);
        if (!deletedMenu) {
            res.status(404).json({ message: "Menu not found" });
            return;
        }
        res.json({ message: "Menu deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting menu", error });
    }
});
exports.deleteMenu = deleteMenu;
