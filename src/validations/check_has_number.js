/**
 * Verifica se o campo contém pelo menos um número.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkHasNumber(value, fieldName = 'O campo') {
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  // Verifica se há pelo menos um número
  const hasNumber = /\d/.test(value);

  if (!hasNumber) {
    return {
      success: false,
      message: `${fieldName} deve conter pelo menos um número.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} contém números.`,
  };
}
