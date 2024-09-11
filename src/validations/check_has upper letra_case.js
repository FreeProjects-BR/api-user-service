/**
 * Verifica se o campo contém pelo menos uma letra maiúscula.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */

export function checkIncludesUpperCase(value, fieldName = 'O campo') {
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  // Verifica se há pelo menos uma letra maiúscula
  const hasUpperCase = /[A-Z]/.test(value);

  if (!hasUpperCase) {
    return {
      success: false,
      message: `${fieldName} deve conter pelo menos uma letra maiúscula.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} contém letra(s) maiúscula(s).`,
  };
}
