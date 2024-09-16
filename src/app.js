import express from 'express';
import cron from 'node-cron';
import { errorHandler } from './middleware/errorHancler.js';
import publicRoutes from './routes/public.js';
import { cleanExpiredTokens } from './jobs/clean_tokens.js';

const app = express();

app.use(express.json());

cron.schedule('0 * * * *', () => {
  console.log('Limpando tokens expirados...');
  cleanExpiredTokens();
});

app.use('/api/user-service', publicRoutes);

app.get('/api/user-service/message', (req, res) => {
  res.send('Olá, API User Service rodando na PORT 8001.');
});

app.use(errorHandler);

export default app;
