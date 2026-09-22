import express from 'express';
import {
  createProfileController,
  loginController,
  registerController,
  updateProfileController,
} from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';

const router = express.Router();

// AUTH ROUTE
router.post('/auth/register', registerController);
router.post('/auth/login', loginController);

// PROFILE ROUTE WITH AUTHORIZATION
router.post('/profile', authMiddleware('user'), createProfileController);
router.patch('/profile', authMiddleware('user'), updateProfileController);

export default router;
