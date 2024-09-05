import express from 'express';
import { errorHandler } from './middleware/errorHancler.js';
import publicRoutes from './routes/public.js';

const app = express();

app.use(express.json());

app.use('/api/user-service', publicRoutes);

app.get('/api/user-service/message', (req, res) => {
  res.send('Olá, API User Service rodando na PORT 8001.');
});

app.use(errorHandler);

export default app;
