import dbService from '../../../../config/database.js';

/**
 * Obtém todos os usuários do banco de dados.
 * @returns {Promise<Object>}
 * @throws {Error}
 */

export const userAllModel = async () => {
  try {
    // Busca todos os usuários no banco de dados.
    const findUsers = await dbService.user.findMany({
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
    return findUsers;
  } catch (error) {
    throw new Error(`Erro buscar usuários.`);
  }
};
