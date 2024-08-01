/*
* Title: Cool -media.
* Description: Cool -media message model schema.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import mongoose for schema and model creation
import mongoose from "mongoose";

// Define the schema for the Message model
const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,  // ID of the chat to which the message belongs
    },
    senderId: {
      type: String,  // ID of the user who sent the message
    },
    text: {
      type: String,  // Content of the message
    },
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
  }
);

// Create the Message model from the schema
const MessageModel = mongoose.model("Message", MessageSchema);

// Export the Message model for use in other parts of the application
export default MessageModel;
