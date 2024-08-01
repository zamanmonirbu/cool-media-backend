/*
* Title: Cool -media.
* Description: Cool -media chat routes.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from 'express';
import { createChat, findChat, userChats } from '../controllers/ChatController.js';

// Create a router object
const router = express.Router();

// Define route to create a new chat
router.post('/', createChat);

// Define route to get chats of a specific user by userId
router.get('/:userId', userChats);

// Define route to find a chat between two users by their IDs
router.get('/find/:firstId/:secondId', findChat);

// Export the router to be used in other parts of the application
export default router;
