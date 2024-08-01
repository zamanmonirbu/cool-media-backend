/*
* Title: Cool -media.
* Description: Express routes for handling comment-related operations.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from "express";
import { createComment, getComments, updateComment, deleteComment } from "../controllers/CommentController.js";

// Create a router object
const router = express.Router();

// Route for creating a comment
// POST request to /comments
router.post("/", createComment);

// Route for getting comments for a specific post
// GET request to /comments/:postId
router.get("/:postId", getComments);

// Route for updating a comment
// PUT request to /comments/:id
router.put("/:id", updateComment);

// Route for deleting a comment
// DELETE request to /comments/:id
router.delete("/:id", deleteComment);

// Export the router object
export default router;
