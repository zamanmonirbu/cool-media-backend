/*
* Title: Cool -media.
* Description: Controller functions for managing messages.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import the Message model
import MessageModel from "../models/MessageModel.js";

// Add a new message to a chat
export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;  // Extract chatId, senderId, and text from request body

  // Create a new message instance
  const message = new MessageModel({
    chatId,
    senderId,
    text,
  });

  try {
    // Save the new message to the database
    const result = await message.save();
    // Respond with the saved message data
    res.status(200).json(result);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Get all messages for a specific chat
export const getMessages = async (req, res) => {
  const { chatId } = req.params;  // Extract chatId from request parameters

  try {
    // Find messages for the given chatId
    const result = await MessageModel.find({ chatId });
    // Respond with the list of messages
    res.status(200).json(result);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};
