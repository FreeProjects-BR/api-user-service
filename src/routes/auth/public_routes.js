import express from 'express';
import { userLoginController } from '../../controllers/auth/login_controller.js';

const authPublicRoutes = express.Router();

authPublicRoutes.post('/login', userLoginController);

export default authPublicRoutes;
