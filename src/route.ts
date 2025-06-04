import express from 'express';
import userRoutes from './user/route';

// Import sub-routes
// Add more imports as needed

const router = express.Router();

// Main API routes
router.use('/users', userRoutes);
// Add more routes as needed

export default router;