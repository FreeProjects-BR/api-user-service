import { userRegisterModel } from '../../../models/user/createRecords/register.js';
import { userGenerateCode } from '../../../utils/user/generate_code.js';
/**
 * @typedef {Object} UserData
 * @property {string} name - O nome do usuário.
 * @property {string} email - O e-mail do usuário.
 */

/**
 * @typedef {Object} ServiceResponse
 * @property {number} statusCode - O código de status da resposta.
 * @property {string} message - A mensagem de resposta.
 * @property {Object} data - Os dados do novo usuário criado.
 * @property {number} data.id - O ID do usuário.
 * @property {string} data.email - O e-mail do usuário.
 * @property {string} data.name - O nome do usuário.
 * @property {boolean} data.active - Se o usuário está ativo.
 * @property {string} data.code - O código do usuário.
 * @property {Date} data.createdAt - A data de criação do usuário.
 * @property {Date} data.updatedAt - A data da última atualização do usuário.
 */

/**
 * Cria um novo usuário e realiza validações.
 * @param {UserData} data - Dados do usuário a ser registrado.
 * @returns {Promise<ServiceResponse>} - A resposta contendo o status, mensagem e dados do usuário criado.
 * @throws {Error} - Lança um erro se houver um problema com os dados ou ao criar o usuário.
 */
export const userRegisterServices = async (data) => {
  const { name, email } = data;

  if (!name || !email) {
    const error = new Error('Nome, email e senha são obrigatórios.');
    error.statusCode = 400;
    throw error;
  }

  // Gera um código único para o usuário.
  const codeUnique = await userGenerateCode();

  try {
    // Cria o novo usuário
    const newUser = await userRegisterModel({
      email,
      name,
      active: true,
      code: codeUnique,
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
