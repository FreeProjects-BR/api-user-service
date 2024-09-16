import jwt from 'jsonwebtoken';
import dbService from '../../../config/database.js';
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Verifica se o token é válido.
 * @param {string} token
 * @returns {Promise<string>}
 * @throws {Error}
 */
export const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const tokenRecord = await dbService.userToken.findUnique({
      where: { token },
    });

    if (
      !tokenRecord ||
      tokenRecord.revoked ||
      tokenRecord.expiresAt < new Date()
    ) {
      throw new Error('Token inválido ou expirado.');
    }

    return decoded.userId;
  } catch (error) {
    throw new Error('Erro na verificação do token: ' + error.message);
  }
};
