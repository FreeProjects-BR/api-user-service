import dbService from '../../../../config/database.js';

/**
 * Obtém um usuários pelo ID do banco de dados.
 * @param {string} id
 * @returns {Promise<Object|null>}
 * @throws {Error}
 */

export const userFindByIdModel = async (id) => {
  try {
    // Busca o usuário pelo ID no banco de dados.
    const findByIdUser = await dbService.user.findUnique({
      where: { id },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        name: true,
        active: true,
        code: true,
        password: true,
        resetPasswordToken: true,
        resetPasswordSentAt: true,
        rememberCreateAt: true,
        lastPasswordUpdate: true,
        passwordExpiration: true,
        failedLoginAttempts: true,
        lockoutTime: true,
      },
    });
    return findByIdUser;
  } catch (error) {
    throw new Error(`Erro ao buscar usuário`);
  }
};
