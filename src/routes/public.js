import express from 'express';
import createRecordsPublicRoutes from './user/createRecords/public_routes.js';
import authRecordspublicRoutes from './auth/public_routes.js';

const publicRoutes = express.Router();

publicRoutes.use(express.json());

publicRoutes.use('/', createRecordsPublicRoutes);
publicRoutes.use('/', authRecordspublicRoutes);

export default publicRoutes;
