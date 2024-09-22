/**
 * Middleware global de tratamento de erros.
 * @param {Error} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {void}
 */
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || 'Ocorreu um erro no servidor.',
  });
};
