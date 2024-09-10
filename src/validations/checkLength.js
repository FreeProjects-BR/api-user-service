/**
 * Valida o comprimento mínimo e máximo de caracteres de uma string.
 * @param {string} value
 * @param {number} minLength
 * @param {number} maxLength
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkLength(
  value,
  minLength,
  maxLength,
  fieldName = 'O campo',
) {
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  const length = value.length;

  if (length < minLength) {
    return {
      success: false,
      message: `${fieldName} deve ter pelo menos ${minLength} caracteres.`,
    };
  }

  if (length > maxLength) {
    return {
      success: false,
      message: `${fieldName} deve ter no máximo ${maxLength} caracteres.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} está dentro do comprimento permitido.`,
  };
}
