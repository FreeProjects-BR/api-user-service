import { userRegisterModel } from '../../../models/user/createRecords/register.js';
import { emailValidateSchima } from '../../../validations/schemas/schema_email.js';
import { passwordNewEncrypt } from '../../../utils/password/password_new.js';
import { userGenerateCode } from '../../../utils/user/generate_code.js';
import { findUserByEmail } from '../../../utils/user/find_user_by_email.js';
import { nameValidateSchema } from '../../../validations/schemas/schima_name.js';
import { passwordValidateSchema } from '../../../validations/schemas/schema_password.js';
/**
 * @typedef {Object} UserData
 * @property {string} name
 * @property {string} email
 */

/**
 * @typedef {Object} ServiceResponse
 * @property {number} statusCode
 * @property {string} message
 * @property {Object} data
 * @property {number} data.id
 * @property {string} data.email
 * @property {string} data.name
 * @property {boolean} data.active
 * @property {string} data.code
 * @property {string} data.password
 * @property {Date} data.createdAt
 * @property {Date} data.updatedAt
 */

/**
 * Cria um novo usuário e realiza validações.
 * @param {UserData} data
 * @returns {Promise<ServiceResponse>}
 * @throws {Error}
 */
export const userRegisterServices = async (data) => {
  const { name, email, password } = data;

  // Lista de campos ausentes
  const missingFields = [];
  if (!name) missingFields.push('Nome');
  if (!email) missingFields.push('E-mail');
  if (!password) missingFields.push('Senha');

  // Se houver campos ausentes, cria uma mensagem dinâmica
  if (missingFields.length > 0) {
    const error = new Error(
      `${missingFields.join(', ')} ${missingFields.length > 1 ? 'são obrigatórios.' : 'é obrigatório.'}`,
    );
    error.statusCode = 400;
    throw error;
  }

  // Validação do e-mail usando emailValidateSchima
  const emailValidationResult = emailValidateSchima(email);
  if (!emailValidationResult.success) {
    const error = new Error(emailValidationResult.message);
    error.statusCode = 400;
    throw error;
  }

  // Validação do name usando nameValidateSchima
  const nameValidationResult = nameValidateSchema(name);
  if (!nameValidationResult.success) {
    const error = new Error(nameValidationResult.message);
    error.statusCode = 400;
    throw error;
  }

  // Validação do password usando passwordValidateSchema
  const passwordValidationResult = passwordValidateSchema(password);
  if (!passwordValidationResult.success) {
    const error = new Error(passwordValidationResult.message);
    error.statusCode = 400;
    throw error;
  }

  // Verifica se o email já está em uso.
  const existingUserEmail = await findUserByEmail(email);
  if (existingUserEmail) {
    const error = new Error('O e-mail já está em uso.');
    error.statusCode = 409;
    throw error;
  }

  // Gera um código único para o usuário.
  const codeUnique = await userGenerateCode();

  const { hashedPassword } = await passwordNewEncrypt(password);

  try {
    // Cria o novo usuário
    const newUser = await userRegisterModel({
      email,
      name,
      active: true,
      code: codeUnique,
      password: hashedPassword,
    });

    return {
      statusCode: 201,
      message: 'Usuário criado com sucesso.',
      data: newUser,
    };
  } catch (error) {
    const customError = new Error('Erro ao criar usuário.');
    customError.statusCode = 500;
    throw customError;
  }
};
