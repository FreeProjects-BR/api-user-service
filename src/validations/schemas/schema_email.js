import { checkEmptyToNot } from '../empty_do_not_check.js';
import { checkFieldTrim } from '../trim_field_check.js';
import { checkSpacesInString } from '../check_spaces_in_string.js';
import { checkIsValidEmail } from '../isValidEmail.js';

export function emailValidateSchima(email) {
  // Verificar se o campo está vazio
  const emptyCheck = checkEmptyToNot(email, 'E-mail');
  if (!emptyCheck.success) {
    return emptyCheck;
  }

  // Remover espaços no início e fim da string
  const trimmedEmail = checkFieldTrim(email);

  // Verificar se há espaços entre os caracteres
  const spaceCheck = checkSpacesInString(trimmedEmail, 'E-mail');
  if (!spaceCheck.success) {
    return spaceCheck;
  }

  // Verificar se o e-mail é válido
  const emailValidCheck = checkIsValidEmail(trimmedEmail);
  if (!emailValidCheck.success) {
    return emailValidCheck;
  }

  // Se todas as verificações passaram, retornar sucesso
  return {
    success: true,
    message: 'E-mail validado com sucesso.',
  };
}
