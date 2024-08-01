/*
* Title: Cool -media.
* Description: Cool -media file upload routes.
* Author: Md. Moniruzzaman
* Date: 01-August-2024
*/

// Import required modules
import express from 'express';
import multer from 'multer';

// Create a router object
const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

// Create an upload instance and receive a single file
const upload = multer({ storage: storage });

// Define route to handle file upload
router.post("/", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json("File upload failed");
    }
});

// Export the router to be used in other parts of the application
export default router;
