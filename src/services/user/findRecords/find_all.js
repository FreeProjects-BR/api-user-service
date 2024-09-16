import { userAllModel } from '../../../models/user/findRecords/find_all.js';

export const userAllServices = async () => {
  try {
    // Obtém todos os usuários e retorna a lista.
    const allUsers = await userAllModel();

    if (allUsers.length === 0) {
      return {
        statusCode: 404,
        message: 'Nenhum usuário encontrado.',
        data: [],
      };
    }

    return {
      statusCode: 200,
      message: 'Usuários obtidos com sucesso.',
      data: allUsers,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error ao obter usuários.',
      data: [],
    };
  }
};
