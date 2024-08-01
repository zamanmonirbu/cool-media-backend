/*
* Title: Cool -media.
* Description: Cool -media post routes.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from 'express';
import { 
    createPost, 
    deletePost, 
    getPost, 
    getTimelinePosts, 
    likePost, 
    updatePost 
} from '../controllers/PostController.js';
import authMiddleWare from '../middleware/AuthMiddleware.js';

// Create a router object
const router = express.Router();

// Define route to create a new post
router.post('/', createPost);

// Define route to get a post by ID
router.get('/:id', getPost);

// Define route to update a post by ID
router.put('/:id', updatePost);

// Define route to delete a post by ID
router.delete('/:id', deletePost);

// Define route to like a post by ID
router.put('/:id/like', likePost);

// Define route to get timeline posts for a user by user ID
router.get('/:id/timeline', getTimelinePosts);

// Export the router to be used in other parts of the application
export default router;
