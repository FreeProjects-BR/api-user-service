import dbService from '../../../../config/database.js';
/**
 * @typedef {Object} UserData
 * @property {string} email
 * @property {string} name
 * @property {boolean} active
 * @property {string} code
 * @property {string} password
 */

/**
 * @typedef {Object} UserResponse
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
 * Cria um novo usuário no banco de dados.
 * @param {UserData} data
 * @returns {Promise<UserResponse>}
 * @throws {Error}
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
        password: true,
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
