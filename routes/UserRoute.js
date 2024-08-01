/*
* Title: Cool -media.
* Description: Cool -media user routes.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from 'express';
import { 
    deleteUser, 
    followUser, 
    getAllUsers, 
    getUser, 
    unfollowUser, 
    updateUser 
} from '../controllers/UserController.js';
import authMiddleWare from '../middleware/AuthMiddleware.js';

// Create a router object
const router = express.Router();

// Define route to get a specific user by ID
router.get('/:id', getUser);

// Define route to get all users
router.get('/', getAllUsers);

// Define route to update a user by ID with authentication middleware
router.put('/:id', authMiddleWare, updateUser);

// Define route to delete a user by ID with authentication middleware
router.delete('/:id', authMiddleWare, deleteUser);

// Define route to follow a user by ID with authentication middleware
router.put('/:id/follow', authMiddleWare, followUser);

// Define route to unfollow a user by ID with authentication middleware
router.put('/:id/unfollow', authMiddleWare, unfollowUser);

// Export the router to be used in other parts of the application
export default router;
