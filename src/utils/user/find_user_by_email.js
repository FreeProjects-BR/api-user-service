import dbService from '../../../config/database.js';

/**
 * Encontra um usuário pelo e-mail.
 * @param {string} email
 * @returns {Promise<Object>}
 */
export const findUserByEmail = async (email) => {
  const user = await dbService.user.findUnique({
    where: { email },
    select: {
      id: true,
      createdAt: false,
      updatedAt: false,
      email: false,
      name: false,
      active: false,
      code: true,
      password: true,
    },
  });
  return user;
};
