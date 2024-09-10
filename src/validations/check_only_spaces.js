/**
 * Verifica se o campo contém apenas espaços ou está vazio.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkOnlySpaces(value, fieldName = 'O campo') {
  if (typeof value !== 'string' || value.trim() === '') {
    return {
      success: false,
      message: `${fieldName} não pode conter apenas espaços.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} está preenchido corretamente.`,
  };
}
