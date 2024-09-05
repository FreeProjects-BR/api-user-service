/**
 * Middleware global de tratamento de erros.
 * @param {Error} err - O objeto de erro lançado.
 * @param {Object} req - O objeto de solicitação do Express.
 * @param {Object} res - O objeto de resposta do Express.
 * @param {Function} next - Função de middleware para passar o controle para o próximo manipulador.
 * @returns {void}
 */
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || 'Ocorreu um erro no servidor.',
  });
};
