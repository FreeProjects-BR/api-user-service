/**
 * Verifica se o valor não contém espaços e se é uma string não vazia.
 * @param {string} value - Valor a ser verificado.
 * @param {string} fieldName - Nome do campo (opcional, valor padrão: "O campo").
 * @returns {Object} - Objeto com sucesso e mensagem.
 */
export function checkNoSpacesInString(value, fieldName = 'O campo') {
  // Verifica se o valor é uma string
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve ser uma string.`,
    };
  }

  // Remove espaços e verifica se a string não está vazia
  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return {
      success: false,
      message: `${fieldName} não pode estar vazio.`,
    };
  }

  // Verifica se contém espaços
  if (/\s/.test(trimmedValue)) {
    return {
      success: false,
      message: `${fieldName} não pode conter espaços.`,
    };
  }

  // Se não contém espaços e é uma string não vazia, retorna sucesso
  return {
    success: true,
    message: `${fieldName} está correto.`,
  };
}
