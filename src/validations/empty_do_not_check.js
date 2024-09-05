export function checkEmptyToNot(value, fielName = 'O campo') {
  if (value === undefined || value === null || value === '') {
    return {
      success: false,
      message: `${fielName} não pode estar vazio.`,
    };
  }
  return {
    success: true,
    message: `${fielName} está preenchido.`,
  };
}
