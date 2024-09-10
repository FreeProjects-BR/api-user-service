/**
 * Verifica se o campo contém pelo menos um caractere especial além de letras e números.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkHasSpecialCharacters(value, fieldName = 'O campo') {
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  // Verifica se há pelo menos um caractere especial
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (!hasSpecialChars) {
    return {
      success: false,
      message: `${fieldName} deve conter pelo menos um caractere especial.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} contém caracteres especiais.`,
  };
}
