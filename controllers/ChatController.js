/*
* Title: Cool -media.
* Description: Controller functions for managing chats.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import the Chat model
import ChatModel from "../models/ChatModel.js";

// Create a new chat
export const createChat = async (req, res) => {
  // Create a new chat instance with sender and receiver IDs
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    // Save the new chat to the database
    const result = await newChat.save();
    // Respond with the created chat data
    res.status(200).json(result);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Get all chats for a specific user
export const userChats = async (req, res) => {
  try {
    // Find chats where the user is a member
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    // Respond with the list of chats
    res.status(200).json(chat);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Find a chat between two users
export const findChat = async (req, res) => {
  try {
    // Find a chat where both users are members
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    // Respond with the chat data
    res.status(200).json(chat);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};
