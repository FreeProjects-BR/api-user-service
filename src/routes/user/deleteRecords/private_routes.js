import express from 'express';
import { userDeleteByIdController } from '../../../controllers/user/deleteRecords/delete_by_id_controller.js';

const deleteRecordsPrivateRoutes = express.Router();

deleteRecordsPrivateRoutes.delete('/usuario/:id', userDeleteByIdController);

export default deleteRecordsPrivateRoutes;
