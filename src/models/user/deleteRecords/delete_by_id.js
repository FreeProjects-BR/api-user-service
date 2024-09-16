import dbService from '../../../../config/database.js';

/**
 * Deleta um usuário pelo ID.
 * @param {string} id
 * @returns {Promise<Object>}
 * @throws {Error}
 */
export const userDeleteByIdModel = async (id) => {
  try {
    // Adiciona um log para verificar o ID recebido
    console.log(`Tentando deletar usuário com ID: ${id}`);

    // Deleta o usuário no banco de dados.
    const deletedUser = await dbService.user.delete({
      where: { id },
      select: {
        id: false,
        createdAt: false,
        email: true,
        name: false,
        active: false,
        code: false,
        password: false,
        resetPasswordToken: false,
        resetPasswordSentAt: false,
        rememberCreateAt: false,
        lastPasswordUpdate: false,
        passwordExpiration: false,
        failedLoginAttempts: false,
        lockoutTime: false,
      },
    });
    return deletedUser;
  } catch (error) {
    throw new Error(`Erro ao deletar o usuário.`);
  }
};
