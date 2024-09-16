import express from 'express';
import { userRegisterController } from '../../../controllers/user/createRecords/register_controller.js';

const createRecordsPublicRoutes = express.Router();

createRecordsPublicRoutes.post('/new', userRegisterController);

export default createRecordsPublicRoutes;
