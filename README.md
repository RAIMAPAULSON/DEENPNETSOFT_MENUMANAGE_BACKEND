# Menu Management Backend

This is the backend service for the **Menu Management App**, built with **Node.js, Express, TypeScript, and Mongoose**. It provides RESTful APIs for managing menus and their items.

## Tech Stack
- **Node.js**
- **Express.js**
- **TypeScript** 
- **Mongoose** 

## Setup & Installation

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/menu-management-backend.git
cd menu-management-backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/menu_db
```

### 4. Run the Server
For development:
```sh
npm run dev
```
For production:
```sh
npm start
```

## API Endpoints
### Menus
- `GET /api/menus` - Get all menus
- `GET /api/menus/:id` - Get a single menu
- `POST /api/menus` - Create a new menu
- `PUT /api/menus/:id` - Update a menu
- `DELETE /api/menus/:id` - Delete a menu

### Items
- `PUT /api/menus/:id/items` - Add or update items in a menu

## Folder Structure
```
/src
 ├── controllers/      # API logic
 ├── models/           # Mongoose models
 ├── routes/           # Express routes
 ├── config/           # Database connection
 ├── app.ts            # Express app setup
 ├── server.ts         # Server entry point
```

