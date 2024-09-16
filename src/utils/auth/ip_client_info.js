/**
 * Obtém o endereço IP do cliente a partir do cabeçalho ou da conexão.
 * @param {Object} req
 * @returns {string}
 */
export const ipClient = (req) => {
  return req.headers['x-forwarded-for']
    ? req.headers['x-forwarded-for'].split(',')[0].trim()
    : req.connection.remoteAddress;
};
