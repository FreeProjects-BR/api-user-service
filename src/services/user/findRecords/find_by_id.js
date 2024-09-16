import { userFindByIdModel } from '../../../models/user/findRecords/find_by_id.js';

/**
 * Obtém os dados de um usuários pelo ID.
 * @param {string}
 * @returns {Promise<Object>}
 * @throws {Error}
 */

export const userFindByIdServices = async (id) => {
  // Verifica se o ID é válido.
  if (!id) {
    return {
      statusCode: 404,
      message: 'ID do usuário é obrigatório.',
      data: null,
    };
  }

  try {
    // Obtém o usuário pelo ID e retorna os dados.
    const idUser = await userFindByIdModel(id);

    if (!idUser) {
      return {
        statusCode: 404,
        message: 'Usuário não encontrado.',
        data: null,
      };
    }
    return {
      statusCode: 200,
      message: 'Usuário encontrado com sucesso',
      data: idUser,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Erro ao obter o usuário',
      data: null,
    };
  }
};
