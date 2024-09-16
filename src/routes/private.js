import express from 'express';
import findRecordsPrivateRoutes from './user/findRecords/private_routes.js';

const privateRoutes = express.Router();

privateRoutes.use(express.json());

privateRoutes.use('/', findRecordsPrivateRoutes);

export default privateRoutes;
