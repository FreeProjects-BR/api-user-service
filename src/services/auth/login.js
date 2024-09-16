import { userLoginModel } from '../../models/auth/login.js';
import { emailValidateSchima } from '../../validations/schemas/schema_email.js';
import { passwordValidateSchema } from '../../validations/schemas/schema_password.js';
import { findUserByEmail } from '../../utils/user/find_user_by_email.js';
import { ipClient } from '../../utils/auth/ip_client_info.js';

/**
 * Serviço para autenticar um usuário e gerar um token JWT.
 * @param {Object} req
 * @param {Object} req.body
 * @param {string} req.body.email
 * @param {string} req.body.password
 * @param {string} [req.body.deviceId='unknown']
 * @param {string} [req.body.deviceType='unknown']
 * @returns {Promise<{ token: string }>}
 * @throws {Error}
 */
export const userLoginServices = async (req) => {
  if (!req.body) {
    const error = new Error('Corpo da requisição não fornecido.');
    error.statusCode = 400;
    throw error;
  }

  const {
    email,
    password,
    deviceId = 'unknown',
    deviceType = 'unknown',
  } = req.body;

  const ipAddress = ipClient(req);

  const emailValidationResult = emailValidateSchima(email);
  if (!emailValidationResult.success) {
    const error = new Error(emailValidationResult.message);
    error.statusCode = 400;
    throw error;
  }

  const passwordValidationResult = passwordValidateSchema(password);
  if (!passwordValidationResult.success) {
    const error = new Error(passwordValidationResult.message);
    error.statusCode = 400;
    throw error;
  }

  const user = await findUserByEmail(email);
  if (!user) {
    const error = new Error('Usuário não encontrado.');
    error.statusCode = 404;
    throw error;
  }

  const token = await userLoginModel({
    email,
    password,
    ipAddress,
    deviceId,
    deviceType,
  });

  return { token };
};
