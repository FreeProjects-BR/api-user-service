import dbService from '../../../config/database.js';

/**
 * Encontra um usuário pelo email.
 * @param {string} email
 * @returns {Promise<Object|null>}
 */
export async function findUserByEmail(email) {
  try {
    const user = await dbService.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        success: false,
        message: 'Usuário não encontrado.',
      };
    }

    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Erro ao buscar usuário pelo email.',
      error: error.message,
    };
  }
}
