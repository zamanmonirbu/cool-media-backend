/*
* Title: Cool -media.
* Description: Middleware for authentication using JWT.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Get the secret key for JWT from environment variables
const secret = process.env.JWTKEY;

// Middleware function to authenticate requests
const authMiddleWare = async (req, res, next) => {
  try {
    // Extract token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (token) {
      // Verify the token using the secret key
      const decoded = jwt.verify(token, secret);
      console.log(decoded);

      // Attach the decoded user ID to the request body
      req.body._id = decoded?.id;
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log any errors and return a 401 Unauthorized response
    console.log(error);
    res.status(401).json("Unauthorized");
  }
};

// Export the middleware function for use in other parts of the application
export default authMiddleWare;
