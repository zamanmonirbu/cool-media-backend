/*
* Title: Cool-media Server.
* Description: Entry point for the Express application.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import route handlers
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js';
import UploadRoute from './routes/UploadRoute.js';
import ChatRoute from './routes/ChatRoute.js';
import MessageRoute from './routes/MessageRoute.js';
import commentRoutes from "./routes/commentsRoute.js";

// Initialize the Express application
const app = express();

// Middleware for parsing incoming requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Middleware for enabling CORS
app.use(cors());
app.options('*', cors());
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

// Middleware to serve images from the public folder
app.use(express.static('public'));
app.use('/images', express.static('images'));

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.PORT;
const CONNECTION = process.env.MONGODB_CONNECTION;

// Connect to MongoDB and start the server
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// Define routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use("/comments", commentRoutes);
app.use('/upload', UploadRoute);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);
