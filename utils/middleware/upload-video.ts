// src/middleware/uploadMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import multer from 'multer'; // Make sure multer is imported correctly
import path from 'path';

// Extend the Express Request type to include 'file' property from Multer
declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File;
      files?: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] };
    }
  }
}

// --- Multer Storage Configuration ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../uploads/temp');
    // Ensure the directory exists. In a real app, you'd create this on startup.
    // For simplicity here, we assume it exists or will be created by a setup script.
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Configure Multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100 * 1024 * 1024 // Limit video file size to 100MB (adjust as needed)
  },
  fileFilter: (req, file, cb: multer.FileFilterCallback) => { 
    if (file.mimetype.startsWith('video/')) {
      cb(null, true); // Accept the file
    } else {
      cb(null, false);
    }
  }
});

export const uploadVideoMiddleware = (req: Request, res: Response, next: NextFunction) => {
  upload.single('video')(req, res, (err: any) => {
    if (err instanceof multer.MulterError) {
      console.error("Multer error during upload:", err);
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({ message: 'File too large. Max 100MB allowed.' });
      }
      return res.status(400).json({ message: `Upload error: ${err.message}` });
    } else if (err) {
      console.error("Unknown upload error:", err);
      return res.status(500).json({ message: `An unexpected error occurred during upload: ${err.message}` });
    }
    // No errors, proceed to the next middleware/controller
    next();
  });
};