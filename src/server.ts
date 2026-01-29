import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import taskRoutes from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
