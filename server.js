import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

// Routers
import authRoutes from './routes/authRoutes.js';


const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use('/api', authRoutes);
app.listen(port, () => {
  console.log(
    `Server is running on port ${port} and starting at  http://localhost:${port}`,
  );
});
