/*
* Title: Cool -media.
* Description: Controller functions for user authentication.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);  // Generate a salt for hashing
  const hashedPass = await bcrypt.hash(req.body.password, salt);  // Hash the password
  req.body.password = hashedPass;  // Replace the plain password with hashed password

  const newUser = new UserModel(req.body);  // Create a new user instance
  const { username } = req.body;  // Extract username from request body

  try {
    // Check if the user already exists
    const oldUser = await UserModel.findOne({ username });

    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });  // User exists
    }
    
    // Save the new user to the database
    const user = await newUser.save();
    
    // Generate a JWT token
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }  // Token expiration time
    );
    
    // Respond with the user data and token
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });  // Handle errors
  }
};

// Login an existing user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;  // Extract username and password from request body

  try {
    // Find the user by username
    const user = await UserModel.findOne({ username: username });

    if (user) {
      // Compare the provided password with the hashed password
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        return res.status(400).json("Wrong password");  // Password is incorrect
      } else {
        // Generate a JWT token
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }  // Token expiration time
        );
        
        // Respond with the user data and token
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User not found");  // User not found
    }
  } catch (err) {
    res.status(500).json(err);  // Handle errors
  }
};
