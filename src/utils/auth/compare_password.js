import bcrypt from 'bcrypt';

/**
 * Compara a senha fornecida com a senha criptografada.
 * @param {string} password
 * @param {string} hashedPassword
 * @returns {Promise<boolean>}
 */
export const passwordCompare = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
