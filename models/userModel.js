/*
* Title: Cool -media.
* Description: Cool -media user model schema.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import mongoose for schema and model creation
import mongoose from "mongoose";

// Define the schema for the User model
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,  // Username is mandatory
    },
    password: {
      type: String,
      required: true,  // Password is mandatory
    },
    firstname: {
      type: String,
      required: true,  // First name is mandatory
    },
    lastname: {
      type: String,
      required: true,  // Last name is mandatory
    },
    isAdmin: {
      type: Boolean,
      default: false,  // Default value is false
    },
    profilePicture: String,  // Optional URL for the user's profile picture
    coverPicture: String,    // Optional URL for the user's cover picture
    about: String,           // Optional description about the user
    livesIn: String,         // Optional information about the user's location
    worksAt: String,         // Optional information about the user's workplace
    relationship: String,    // Optional information about the user's relationship status
    country: String,         // Optional information about the user's country
    followers: [String],     // Array of user IDs following this user
    following: [String],     // Array of user IDs that this user is following
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt fields
);

// Create the User model from the schema
const UserModel = mongoose.model("Users", UserSchema);

// Export the User model for use in other parts of the application
export default UserModel;
