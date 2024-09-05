import { userRegisterServices } from '../../../services/user/createRecords/register.js';

/**
 * Controlador para o registro de um novo usuário.
 * @param {Object} req - O objeto de solicitação do Express.
 * @param {Object} req.body - O corpo da solicitação contendo os dados do usuário.
 * @param {Object} res - O objeto de resposta do Express.
 * @param {Function} next - Função de middleware para passar o erro ao próximo manipulador.
 * @returns {Promise<void>} - Uma promessa que não resolve para nenhum valor específico.
 */
export const userRegisterController = async (req, res, next) => {
  try {
    const newUser = await userRegisterServices(req.body);
    return res.status(newUser.statusCode).json(newUser);
  } catch (error) {
    next(error);
  }
};
