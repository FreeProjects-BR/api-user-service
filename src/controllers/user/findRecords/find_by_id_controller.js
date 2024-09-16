import { userFindByIdServices } from '../../../services/user/findRecords/find_by_id.js';

/**
 * Controller para obter um usuário pelo ID.
 * @param {Object} req
 * @param {Object} res
 */

export const userFindByController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { statusCode, message, data } = await userFindByIdServices(id);
    res.status(statusCode).json({
      success: statusCode === 200,
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
};
