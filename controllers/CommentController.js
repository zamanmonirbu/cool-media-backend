/*
* Title: Cool -media.
* Description: Controller functions for managing comments.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import CommentModel from "../models/CommentModel.js";

// Create a new comment
export const createComment = async (req, res) => {
  // Initialize a new comment with the request body
  const newComment = new CommentModel(req.body);

  try {
    // Save the new comment to the database
    await newComment.save();
    // Respond with the newly created comment
    res.status(200).json(newComment);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Get comments for a specific post
export const getComments = async (req, res) => {
  const postId = req.params.postId; // Extract post ID from request parameters

  try {
    // Find all comments associated with the post ID
    const comments = await CommentModel.find({ postId: postId });
    // Respond with the list of comments
    res.status(200).json(comments);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Update a specific comment
export const updateComment = async (req, res) => {
  const commentId = req.params.id; // Extract comment ID from request parameters
  const { userId, text } = req.body; // Extract user ID and updated text from request body

  try {
    // Find the comment by ID
    const comment = await CommentModel.findById(commentId);
    // Check if the user is authorized to update the comment
    if (comment.userId.equals(userId)) {
      comment.text = text; // Update the comment text
      comment.updatedAt = Date.now(); // Update the timestamp
      // Save the updated comment
      await comment.save();
      // Respond with a success message
      res.status(200).json("Comment updated!");
    } else {
      // Respond with an error if the user is not authorized to update the comment
      res.status(403).json("Authentication failed");
    }
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Delete a specific comment
export const deleteComment = async (req, res) => {
  const commentId = req.params.id; // Extract comment ID from request parameters
  const { userId } = req.body; // Extract user ID from request body

  try {
    // Find the comment by ID
    const comment = await CommentModel.findById(commentId);
    // Check if the user is authorized to delete the comment
    if (comment.userId.equals(userId)) {
      // Delete the comment from the database
      await comment.deleteOne();
      // Respond with a success message
      res.status(200).json("Comment deleted.");
    } else {
      // Respond with an error if the user is not authorized to delete the comment
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};
