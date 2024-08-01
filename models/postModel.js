/*
* Title: Cool -media.
* Description: Cool -media post model schema.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import mongoose for schema and model creation
import mongoose from "mongoose";

// Define the schema for the Post model
const postSchema = mongoose.Schema(
  {
    userId: { 
      type: String,  // ID of the user who created the post
      required: true  // User ID is mandatory
    },
    desc: { 
      type: String,  // Description or content of the post
      required: true  // Description is mandatory
    },
    likes: [String],  // Array of user IDs who liked the post
    createdAt: {
      type: Date,
      default: new Date(),  // Default to the current date and time
    },
    image: String,  // Optional image URL associated with the post
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
  }
);

// Create the Post model from the schema
const PostModel = mongoose.model("Posts", postSchema);

// Export the Post model for use in other parts of the application
export default PostModel;
