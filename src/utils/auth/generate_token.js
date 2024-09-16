import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = '4h';

/**
 * Gera um token JWT para o usuário.
 * @param {string} userId
 * @param {string} ipAddress
 * @param {string} deviceId
 * @param {string} deviceType
 * @returns {Promise<string>}
 */
export const generateToken = (userId, ipAddress, deviceId, deviceType) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  return token;
};
