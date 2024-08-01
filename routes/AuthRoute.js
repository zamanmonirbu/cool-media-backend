/*
* Title: Cool -media.
* Description: Cool -media authentication routes.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from 'express';
import { loginUser, registerUser } from '../controllers/AuthController.js';

// Create a router object
const router = express.Router();

// Define route for user registration
router.post('/register', registerUser);

// Define route for user login
router.post('/login', loginUser);

// Export the router to be used in other parts of the application
export default router;
