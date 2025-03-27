import { Request, Response } from "express";
import { Menu } from "../model/menu.model";
import mongoose from "mongoose";

/**
 * Get all menus
 */
export const getMenus = async (req: Request, res: Response): Promise<void> => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: "Error fetching menus", error });
    }
};

/**
 * Get a single menu by ID
 */
export const getMenuById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid menu ID" });
            return;
        }

        const menu = await Menu.findById(id);
        if (!menu) {
            res.status(404).json({ message: "Menu not found" });
            return;
        }

        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving menu", error });
    }
};

/**
 * Create a new menu
 */
export const createMenu = async (req: Request, res: Response): Promise<void> => {
    try {
        const menu = new Menu(req.body);
        await menu.save();
        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Error creating menu", error });
    }
};

/**
 * Update a menu by ID
 */
export const updateMenu = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid menu ID" });
            return;
        }

        const updatedMenu = await Menu.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedMenu) {
            res.status(404).json({ message: "Menu not found" });
            return;
        }

        res.json(updatedMenu);
    } catch (error) {
        res.status(500).json({ message: "Error updating menu", error });
    }
};

/**
 * Delete a menu by ID
 */
export const deleteMenu = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid menu ID" });
            return;
        }

        const deletedMenu = await Menu.findByIdAndDelete(id);

        if (!deletedMenu) {
            res.status(404).json({ message: "Menu not found" });
            return;
        }

        res.json({ message: "Menu deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting menu", error });
    }
};
