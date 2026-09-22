import express from 'express';
import { getPublicJobsController } from '../controllers/public.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';
import { applyJobController } from '../controllers/application.controller';

const router = express.Router();

router.get('/', getPublicJobsController);

router.post('/:jobId/apply', authMiddleware('user'), applyJobController);

export default router;
