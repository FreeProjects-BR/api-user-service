import express from 'express';

const app = express();

app.use(express.json());
app.get('/api/user/service/message', (req, res) => {
  res.send('Olá, API User Service rodando na PORT 8001.');
});
