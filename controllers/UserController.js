/*
* Title: Cool -media.
* Description: Controller functions for managing users.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// Get a specific user by ID
export const getUser = async (req, res) => {
  const id = req.params.id;  // Extract user ID from request parameters

  try {
    // Find the user by ID
    const user = await UserModel.findById(id);
    if (user) {
      // Exclude password from user details
      const { password, ...otherDetails } = user._doc;
      // Respond with the user details
      res.status(200).json(otherDetails);
    } else {
      // Respond with an error if user not found
      res.status(404).json("No such User");
    }
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    let users = await UserModel.find();
    // Exclude passwords from user details
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });
    // Respond with the list of users
    res.status(200).json(users);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Update a specific user
export const updateUser = async (req, res) => {
  const id = req.params.id;  // Extract user ID from request parameters
  const { _id, currentUserAdmin, password } = req.body;  // Extract data from request body
  
  if (id === _id) {
    try {
      // If a password is provided, hash it
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      // Update the user with new data
      const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      // Generate a new JWT token
      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWTKEY,
        { expiresIn: "1h" }
      );
      // Respond with updated user and token
      res.status(200).json({ user, token });
    } catch (error) {
      // Handle errors
      res.status(500).json(error);
    }
  } else {
    // Respond with an error if the user is not authorized to update the account
    res.status(403).json("Access Denied! You can update only your own Account.");
  }
};

// Delete a specific user
export const deleteUser = async (req, res) => {
  const id = req.params.id;  // Extract user ID from request parameters
  const { currentUserId, currentUserAdmin } = req.body;  // Extract data from request body

  if (currentUserId == id || currentUserAdmin) {
    try {
      // Delete the user from the database
      await UserModel.findByIdAndDelete(id);
      // Respond with a success message
      res.status(200).json("User Deleted Successfully!");
    } catch (error) {
      // Handle errors
      res.status(500).json(error);
    }
  } else {
    // Respond with an error if the user is not authorized to delete the account
    res.status(403).json("Access Denied!");
  }
};

// Follow a specific user
export const followUser = async (req, res) => {
  const id = req.params.id;  // Extract user ID from request parameters
  const { _id } = req.body;  // Extract user ID from request body

  if (_id == id) {
    // Respond with an error if a user tries to follow themselves
    res.status(403).json("Action Forbidden");
  } else {
    try {
      // Find both the user to follow and the following user
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      // Check if the user is already following the target user
      if (!followUser.followers.includes(_id)) {
        // Update both users' follower and following lists
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });
        // Respond with a success message
        res.status(200).json("User followed!");
      } else {
        // Respond with an error if the user is already following the target user
        res.status(403).json("You are already following this id");
      }
    } catch (error) {
      // Handle errors
      res.status(500).json(error);
    }
  }
};

// Unfollow a specific user
export const unfollowUser = async (req, res) => {
  const id = req.params.id;  // Extract user ID from request parameters
  const { _id } = req.body;  // Extract user ID from request body

  if (_id === id) {
    // Respond with an error if a user tries to unfollow themselves
    res.status(403).json("Action Forbidden");
  } else {
    try {
      // Find both the user to unfollow and the unfollowing user
      const unFollowUser = await UserModel.findById(id);
      const unFollowingUser = await UserModel.findById(_id);

      // Check if the user is following the target user
      if (unFollowUser.followers.includes(_id)) {
        // Update both users' follower and following lists
        await unFollowUser.updateOne({ $pull: { followers: _id } });
        await unFollowingUser.updateOne({ $pull: { following: id } });
        // Respond with a success message
        res.status(200).json("Unfollowed Successfully!");
      } else {
        // Respond with an error if the user is not following the target user
        res.status(403).json("You are not following this User");
      }
    } catch (error) {
      // Handle errors
      res.status(500).json(error);
    }
  }
};
