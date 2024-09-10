/**
 * Verifica se o campo não contém caracteres especiais.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkNoSpecialCharacters(value, fieldName = 'O campo') {
  const specialCharRegex = /[^a-zA-Z0-9\s]/;

  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  if (specialCharRegex.test(value)) {
    return {
      success: false,
      message: `${fieldName} não pode conter caracteres especiais.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} está correto.`,
  };
}
