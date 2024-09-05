import express from 'express';
import createRecordsPublicRoutes from './user/createRecords/publicRoutes.js';

const publicRoutes = express.Router();

publicRoutes.use(express.json());

publicRoutes.use('/', createRecordsPublicRoutes);

export default publicRoutes;
