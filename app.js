import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/menuDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
});

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    items: [itemSchema],
});

const Menu = mongoose.model('Menu', menuSchema);


// Get all menus
app.get('/menus', async (req, res) => {
    const menus = await Menu.find();
    res.json(menus);
});

// Get a single menu by ID
app.get('/menus/:id', async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    res.json(menu);
});

// Create a new menu
app.post('/menus', async (req, res) => {
    const newMenu = new Menu(req.body);
    await newMenu.save();
    res.json(newMenu);
});

// Update a menu
app.put('/menus/:id', async (req, res) => {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMenu);
});

// Delete a menu
app.delete('/menus/:id', async (req, res) => {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu deleted' });
});

// Add an item to a menu
app.post('/menus/:id/items', async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    menu.items.push(req.body);
    await menu.save();
    res.json(menu);
});

// Update a menu item
app.put('/menus/:menuId/items/:itemId', async (req, res) => {
    const menu = await Menu.findById(req.params.menuId);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    const item = menu.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    Object.assign(item, req.body);
    await menu.save();
    res.json(menu);
});

// Delete a menu item
app.delete('/menus/:menuId/items/:itemId', async (req, res) => {
    const menu = await Menu.findById(req.params.menuId);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    menu.items = menu.items.filter(item => item._id.toString() !== req.params.itemId);
    await menu.save();
    res.json(menu);
});

app.listen(5000, () => {
    console.log('Server running on port 3000');
});