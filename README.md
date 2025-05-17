# Full Stack React & Node.js Application

This is a full-stack application built with React.js (frontend) and Node.js/Express (backend).

## Project Structure

```
.
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   └── package.json
│
└── server/             # Node.js backend
    ├── routes/
    ├── controllers/
    ├── models/
    ├── middleware/
    ├── index.js
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Setting up the Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```
   PORT=5000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on http://localhost:5000

### Setting up the Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The client will start on http://localhost:3000

## Available Scripts

In the server directory:
- `npm start`: Starts the server in production mode
- `npm run dev`: Starts the server in development mode with nodemon

In the client directory:
- `npm start`: Starts the development server
- `npm build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm run eject`: Ejects from create-react-app

## Features

- React frontend with React Router for navigation
- Express backend with basic API setup
- CORS enabled
- Security middleware with helmet
- Environment variables support
- Development and production configurations
- Proxy configuration for development

## License

ISC 