import bcrypt from 'bcrypt';

/**
 * Criptografa uma senha.
 * @param {string} password
 * @returns {Promise<{hashedPassword: string, statusCode: number}>}
 * @throws {Error}
 */

export const passwordNewEncrypt = async (password) => {
  if (!password) {
    const error = new Error('A senha é obrigatória.');
    error.statusCode = 400;
    throw error;
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return { hashedPassword, statusCode: 200 };
  } catch (error) {
    error.message = 'Erro ao criptografar a senha';
    error.statusCode = 500;
    throw error;
  }
};
