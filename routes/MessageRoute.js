/*
* Title: Cool -media.
* Description: Cool -media message routes.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from 'express';
import { addMessage, getMessages } from '../controllers/MessageController.js';

// Create a router object
const router = express.Router();

// Define route to add a new message
router.post('/', addMessage);

// Define route to get messages of a specific chat by chatId
router.get('/:chatId', getMessages);

// Export the router to be used in other parts of the application
export default router;
