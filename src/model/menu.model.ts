import mongoose, { Schema, Document } from "mongoose";

/**
 * Item Interface
 */
interface IItem {
    name: string;
    description: string;
    price: string;
}

/**
 * Menu Interface
 */
export interface IMenu extends Document {
    name: string;
    description: string;
    items: IItem[];
}

/**
 * Item Schema
 */
const ItemSchema = new Schema<IItem>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
});

/**
 * Menu Schema
 */
const MenuSchema = new Schema<IMenu>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    items: { type: [ItemSchema], default: [] },
});

/**
 * Export Menu Model
 */
export const Menu = mongoose.model<IMenu>("Menu", MenuSchema);