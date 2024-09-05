export function checkAndRemoveSpaces(value, fieldName = 'O campo') {
  if (typeof value !== 'string') {
    return {
      success: false,
      message: `${fieldName} deve conter caracteres.`,
    };
  }
  if (/\s/.test(value)) {
    return {
      success: false,
      message: `${fieldName} contém espaços. Remova os espaços.`,
    };
  }
  return {
    success: true,
    message: `${fieldName} está correto.`,
  };
}
