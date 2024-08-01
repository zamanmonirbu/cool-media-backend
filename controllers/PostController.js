/*
* Title: Cool -media.
* Description: Controller functions for managing posts.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import PostModel from "../models/PostModel.js";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";

// Create a new post
export const createPost = async (req, res) => {
  // Create a new post instance with request body data
  const newPost = new PostModel(req.body);

  try {
    // Save the new post to the database
    await newPost.save();
    // Respond with the created post data
    res.status(200).json(newPost);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Get a specific post by ID
export const getPost = async (req, res) => {
  const id = req.params.id;  // Extract post ID from request parameters

  try {
    // Find the post by ID
    const post = await PostModel.findById(id);
    // Respond with the post data
    res.status(200).json(post);
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Update a specific post
export const updatePost = async (req, res) => {
  const postId = req.params.id;  // Extract post ID from request parameters
  const { userId } = req.body;  // Extract user ID from request body

  try {
    // Find the post by ID
    const post = await PostModel.findById(postId);
    // Check if the user is the owner of the post
    if (post.userId === userId) {
      // Update the post with new data
      await post.updateOne({ $set: req.body });
      // Respond with a success message
      res.status(200).json("Post updated!");
    } else {
      // Respond with an error if authentication fails
      res.status(403).json("Authentication failed");
    }
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Delete a specific post
export const deletePost = async (req, res) => {
  const id = req.params.id;  // Extract post ID from request parameters
  const { userId } = req.body;  // Extract user ID from request body

  try {
    // Find the post by ID
    const post = await PostModel.findById(id);
    // Check if the user is the owner of the post
    if (post.userId === userId) {
      // Delete the post from the database
      await post.deleteOne();
      // Respond with a success message
      res.status(200).json("Post deleted.");
    } else {
      // Respond with an error if authentication fails
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Like or dislike a specific post
export const likePost = async (req, res) => {
  const id = req.params.id;  // Extract post ID from request parameters
  const { userId } = req.body;  // Extract user ID from request body

  try {
    // Find the post by ID
    const post = await PostModel.findById(id);
    // Check if the user has already liked the post
    if (post.likes.includes(userId)) {
      // Dislike the post (remove user ID from likes array)
      await post.updateOne({ $pull: { likes: userId } });
      // Respond with a success message
      res.status(200).json("Post disliked");
    } else {
      // Like the post (add user ID to likes array)
      await post.updateOne({ $push: { likes: userId } });
      // Respond with a success message
      res.status(200).json("Post liked");
    }
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};

// Get timeline posts for a specific user
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;  // Extract user ID from request parameters

  try {
    // Get posts created by the current user
    const currentUserPosts = await PostModel.find({ userId: userId });

    // Get posts from users that the current user is following
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    // Combine and sort posts by creation date
    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  } catch (error) {
    // Handle errors
    res.status(500).json(error);
  }
};
