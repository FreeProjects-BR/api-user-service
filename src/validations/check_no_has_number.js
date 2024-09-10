/**
 * Verifica se o campo contém números.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkNoHasNumber(value, fieldName = 'O campo') {
  const numberRegex = /\d/;

  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  if (numberRegex.test(value)) {
    return {
      success: false,
      message: `${fieldName} não pode conter números.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} está válido e não contém números.`,
  };
}
