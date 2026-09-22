import express, { Request, Response } from 'express';
import cors from 'cors';
import ErrorHandler from './utils/ErrorHandler';
import AppResponse from './middlewares/AppResponse';
import userRoute from './routes/user.route';
import companyRoute from './routes/company-auth.route';
import companyjobRoute from './routes/company-job.route';
import companyProfileRoute from './routes/company-profile.route';
import jobRoute from './routes/job.route';

const app = express();

app.use(express.json());
app.use(cors());
app.use(AppResponse);

// ROUTING
app.use('/api/job', jobRoute);

app.use('/api/user', userRoute);
// app.use('/api/user/profile', userRoute);
app.use('/api/company', companyRoute);
app.use('/api/company/job', companyjobRoute);
app.use('/api/company/profile', companyProfileRoute);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.fail(404, 'Endpoint not found');
});

app.use(ErrorHandler);
export default app;
