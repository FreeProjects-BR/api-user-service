import dotenv from 'dotenv';
import http from 'http';
import app from './app.js';

const env = process.env.NOD_ENV || 'development';
dotenv.config({ path: `.env${env === 'production' ? '.production' : ''}` });

const port = process.env.API_PORT || 8001;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
