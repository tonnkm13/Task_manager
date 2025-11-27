import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

// Routers

import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';


const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} and starting at  http://localhost:${port}`,
  );
});
