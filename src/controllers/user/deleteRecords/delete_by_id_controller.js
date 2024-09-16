import { userDeleteByIdServices } from '../../../services/user/deleteRecords/delete_by_id.js';

/**
 * Controlador para deletar um usuário pelo ID.
 * @param {Object} req - Requisição HTTP.
 * @param {Object} res - Resposta HTTP.
 */
export const userDeleteByIdController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { statusCode, message, data } = await userDeleteByIdServices(id);

    res.status(statusCode).json({
      success: statusCode === 200,
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
};
