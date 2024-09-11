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
    /01/,
    /12/,
    /123/,
    /1234/,
    /12345/,
    /123456/,
    /1234567/,
    /12345678/,
    /123456789/,
    /1234567890/,
    /0123456789/,
    /23/,
    /234/,
    /2345/,
    /23456/,
    /234567/,
    /2345678/,
    /23456789/,
    /234567890/,
    /023456789/,
    /34/,
    /345/,
    /3456/,
    /34567/,
    /345678/,
    /3456789/,
    /34567890/,
    /03456789/,
    /45/,
    /456/,
    /4567/,
    /45678/,
    /456789/,
    /4567890/,
    /0456789/,
    /56/,
    /567/,
    /5678/,
    /56789/,
    /567890/,
    /056789/,
    /67/,
    /678/,
    /6789/,
    /67890/,
    /06789/,
    /78/,
    /789/,
    /7890/,
    /0789/,
    /89/,
    /890/,
    /089/,
    /90/,
    /00/,
    /000/,
    /0000/,
    /11/,
    /111/,
    /1111/,
    /111111/,
    /123123/,
    /ab/,
    /abc/,
    /abcd/,
    /abcde/,
    /password/,
    /admin/,
    /letmein/,
    /qwerty/,
    /test/,
    /teste/,
    /Test/,
    /Teste/,
    /TEST/,
    /TESTE/,
    /mudar/,
    /Mudar/,
    /MUDAR/,
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
