# Simple CRUD Application with Angular, Node.js, and MongoDB

This is a full-stack CRUD (Create, Read, Update, Delete) application with separate frontend and backend folders.

## Project Structure

```
simplecrud-awsdeploy/
├── backend/          # Node.js/Express backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── package.json  # Backend dependencies
│   └── server.js     # Main server file
├── frontend/         # Angular frontend
│   └── src/          # Angular source code
└── README.md         # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- Angular CLI (install globally: `npm install -g @angular/cli`)

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Ensure MongoDB is running locally on port 27017, or update the connection string in `server.js` for your MongoDB instance.

4. Start the backend server:
   ```
   npm start
   ```
   or for development with auto-reload:
   ```
   npm run dev
   ```

   The backend will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend folder:
   ```
   cd frontend
   ```

2. Install dependencies (already done during Angular CLI setup, but if needed):
   ```
   npm install
   ```

3. Start the Angular development server:
   ```
   ng serve
   ```

   The frontend will run on http://localhost:4200

## Usage

1. Ensure both backend and frontend servers are running.
2. Open your browser and go to http://localhost:4200
3. Use the CRUD interface to manage items (name and description).

## API Endpoints

- `GET /api/items` - Get all items
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item by ID
- `DELETE /api/items/:id` - Delete an item by ID

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: Angular, TypeScript
- **Database**: MongoDB

## Deployment to AWS

This project is structured for easy deployment to AWS. You can deploy the backend to AWS Lambda/EC2 and the frontend to AWS S3/CloudFront. MongoDB can be hosted on MongoDB Atlas or AWS DocumentDB.

For detailed AWS deployment instructions, refer to AWS documentation or add deployment scripts as needed.