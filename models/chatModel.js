/*
* Title: Cool -media.
* Description: Cool -media chat model schema.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import mongoose for schema and model creation
import mongoose from "mongoose";

// Define the schema for the Chat model
const ChatSchema = new mongoose.Schema(
  {
    members: {
      type: Array,  // Array of members involved in the chat
    },
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
  }
);

// Create the Chat model from the schema
const ChatModel = mongoose.model("Chat", ChatSchema);

// Export the Chat model for use in other parts of the application
export default ChatModel;
