import express from 'express';
import { userAllController } from '../../../controllers/user/findRecords/find_all_controller.js';

const findRecordsPrivateRoutes = express.Router();

findRecordsPrivateRoutes.get('/usuarios', userAllController);

export default findRecordsPrivateRoutes;
