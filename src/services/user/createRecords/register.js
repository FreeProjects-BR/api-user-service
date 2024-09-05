import { userRegisterModel } from '../../../models/user/createRecords/register.js';
import { passwordNewEncrypt } from '../../../utils/password/password_new.js';
import { userGenerateCode } from '../../../utils/user/generate_code.js';
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

  if (!name || !email || !password) {
    const error = new Error('Nome, email e senha são obrigatórios.');
    error.statusCode = 400;
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

    console.log('Usuário criado com sucesso:', newUser);

    return {
      statusCode: 201,
      message: 'Usuário criado com sucesso.',
      data: newUser,
    };
  } catch (error) {
    console.error('Erro ao criar usuário:', error); // Log detalhado

    const customError = new Error('Erro ao criar usuário.');
    customError.statusCode = 500;
    throw customError;
  }
};
