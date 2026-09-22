import express from 'express';
import {
  loginController,
  registerController,
} from '../controllers/company-auth.controller';

const router = express.Router();

// AUTH ROUTE
router.post('/auth/register', registerController);
router.post('/auth/login', loginController);

export default router;
