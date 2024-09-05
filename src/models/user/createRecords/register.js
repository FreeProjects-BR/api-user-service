import dbService from '../../../../config/database.js';
/**
 * @typedef {Object} UserData
 * @property {string} email - O e-mail do usuário.
 * @property {string} name - O nome do usuário.
 * @property {boolean} active - Se o usuário está ativo.
 * @property {string} code - O código do usuário.
 */

/**
 * @typedef {Object} UserResponse
 * @property {number} statusCode - O código de status da resposta.
 * @property {string} message - A mensagem de resposta.
 * @property {Object} data - Os dados do usuário criado.
 * @property {number} data.id - O ID do usuário.
 * @property {string} data.email - O e-mail do usuário.
 * @property {string} data.name - O nome do usuário.
 * @property {boolean} data.active - Se o usuário está ativo.
 * @property {string} data.code - O código do usuário.
 * @property {Date} data.createdAt - A data de criação do usuário.
 * @property {Date} data.updatedAt - A data da última atualização do usuário.
 */

/**
 * Cria um novo usuário no banco de dados.
 * @param {UserData} data - Os dados do usuário a ser criado.
 * @returns {Promise<UserResponse>} - A resposta contendo o status, mensagem e dados do usuário criado.
 * @throws {Error} - Lança um erro se houver um problema ao criar o usuário.
 */

export const userRegisterModel = async (data) => {
  try {
    const newUser = await dbService.user.create({
      data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        name: true,
        active: true,
        code: true,
      },
    });

    return {
      statusCode: 201,
      message: 'Usuário criado com sucesso',
      data: newUser,
    };
  } catch (error) {
    console.error('Erro detalhado ao criar usuário:', error); // Adicione esta linha
    const customError = new Error('Error ao criar usuário no banco de dados.');
    customError.statusCode = 500;
    throw customError;
  }
};
