import { userDeleteByIdModel } from '../../../models/user/deleteRecords/delete_by_id.js';
import { userFindByIdServices } from '../findRecords/find_by_id.js';

/**
 * Deleta um usuário pelo ID.
 * @param {string} id
 * @returns {Promise<Object>}
 * @throws {Error}
 */

export const userDeleteByIdServices = async (id) => {
  // Verifica se o ID foi fornecido.
  if (!id) {
    return {
      statusCode: 400,
      message: 'ID do usuário é necessário.',
      data: null,
    };
  }

  // Verifica se o usuário existe
  const existingUser = await userFindByIdServices(id);
  if (!existingUser) {
    return {
      statusCode: 404,
      message: 'Usuário não encontrado.',
      data: null,
    };
  }

  try {
    const deleteByIdUser = await userDeleteByIdModel(id);
    return {
      statusCode: 200,
      message: 'Usuário deletado com sucesso.',
      data: deleteByIdUser,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Erro ao deletar o usuário.',
      data: null,
    };
  }
};
