import express from 'express';
import findRecordsPrivateRoutes from './user/findRecords/privateRoutes.js';

const privateRoutes = express.Router();

privateRoutes.use(express.json());

privateRoutes.use('/', findRecordsPrivateRoutes);

export default privateRoutes;
