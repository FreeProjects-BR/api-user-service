import dotenv from 'dotenv';
import http from 'http';

const env = process.env.NOD_ENV || 'development';
dotenv.config({ path: `.env${env === 'production' ? '.production' : ''}` });

const port = process.env.API_PORT || 801;

const server = http.createServer();
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
