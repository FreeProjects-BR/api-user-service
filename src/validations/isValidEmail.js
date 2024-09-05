export function checkIsValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'O e-mail é inválido.',
    };
  }
  return {
    success: true,
    message: 'O e-mail é válido.',
  };
}
