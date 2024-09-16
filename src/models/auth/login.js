import dbService from '../../../config/database.js';
import { passwordCompare } from '../../utils/auth/compare_password.js';
import { generateToken } from '../../utils/auth/generate_token.js';
import { findUserByEmail } from '../../utils/user/find_user_by_email.js';

/**
 * Faz o login do usuário e gera um token JWT.
 * @param {Object} data
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.ipAddress
 * @param {string} data.deviceId
 * @param {string} data.deviceType
 * @returns {Promise<Object>}
 * @throws {Error}
 */
export const userLoginModel = async ({
  email,
  password,
  ipAddress = 'unknown',
  deviceId = 'unknown',
  deviceType = 'unknown',
}) => {
  try {
    const user = await findUserByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const isPasswordValid = await passwordCompare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Senha incorreta.');
    }

    await dbService.userToken.updateMany({
      where: { userId: user.id },
      data: { revoked: true },
    });

    const token = await generateToken({ id: user.id, role: user.role });

    await dbService.userToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt: new Date(Date.now() + 3600 * 1000),
        ipAddress,
        deviceId,
        deviceType,
      },
    });
    return {
      token,
    };
  } catch (error) {
    throw error;
  }
};
