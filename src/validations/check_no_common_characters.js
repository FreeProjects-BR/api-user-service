/**
 * Verifica se a senha contém caracteres ou sequências comuns.
 * @param {string} value
 * @param {string} fieldName
 * @returns {Object}
 */
export function checkNoCommonCharacters(value, fieldName = 'O campo') {
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  // Lista de padrões comuns a serem evitados
  const commonPatterns = [
    /12/,
    /123/,
    /1234/,
    /12345/,
    /ab/,
    /abc/,
    /abcd/,
    /abcde/,
    /password/,
    /admin/,
    /letmein/,
    /qwerty/,
    /123456/,
    /12345678/,
    /111111/,
    /123123/,
  ];

  // Verifica se o valor contém qualquer padrão comum
  const containsCommonPattern = commonPatterns.some((pattern) =>
    pattern.test(value.toLowerCase()),
  );

  if (containsCommonPattern) {
    return {
      success: false,
      message: `${fieldName} contém caracteres ou sequências comuns. Por favor, escolha uma senha mais segura.`,
    };
  }

  return {
    success: true,
    message: `${fieldName} é aceitável.`,
  };
}
