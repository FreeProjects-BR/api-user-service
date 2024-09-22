import { userAllServices } from '../../../services/user/findRecords/find_all.js';

/**
 * Controller para obter todos os usuários.
 * @param {Object} req
 * @param {Object} req.body
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<void>}
 */

export const userAllController = async (req, res, next) => {
  try {
    const { statusCode, message, data } = await userAllServices();

    // Envia a resposta com o status e a mensagem apropriada.
    res.status(statusCode).json({
      success: statusCode === 200,
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
};
