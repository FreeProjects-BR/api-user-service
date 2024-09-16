import express from 'express';
import { userAllController } from '../../../controllers/user/findRecords/find_all_controller.js';
import { userFindByController } from '../../../controllers/user/findRecords/find_by_id_controller.js';

const findRecordsPrivateRoutes = express.Router();

findRecordsPrivateRoutes.get('/usuarios', userAllController);
findRecordsPrivateRoutes.get('/usuario/:id', userFindByController);

export default findRecordsPrivateRoutes;
