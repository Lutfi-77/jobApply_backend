import express from 'express';

import { createJobController } from '../controllers/job.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';

const router = express.Router();

router.post('/', authMiddleware('company'), createJobController);

export default router;
