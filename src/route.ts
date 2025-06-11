import express from 'express';
import userRoutes from './user/route';
import postRoutes from './post/route'

// Import sub-routes
// Add more imports as needed

const router = express.Router();

// Main API routes
router.use('/users', userRoutes);
router.use('/post',postRoutes)
// Add more routes as needed

export default router;