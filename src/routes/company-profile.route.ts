import express from 'express';
import { authMiddleware } from '../middlewares/auth.middlewares';
import {
  addProfileController,
  updateProfileController,
} from '../controllers/company-profile.controller';

const router = express.Router();

// AUTHORIZATION ROUTE
router.post('/', authMiddleware('company'), addProfileController);
router.patch('/', authMiddleware('company'), updateProfileController);

export default router;
