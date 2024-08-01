/*
* Title: Cool -media.
* Description: Mongoose schema and model for comments.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import mongoose from "mongoose";

// Define the schema for comments
const CommentSchema = new mongoose.Schema({
  // Reference to the post that the comment belongs to
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  // Reference to the user who made the comment
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Text content of the comment
  text: {
    type: String,
    required: true,
  },
  // Timestamp for when the comment was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Timestamp for when the comment was last updated
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema
const CommentModel = mongoose.model("Comment", CommentSchema);

// Export the model
export default CommentModel;
