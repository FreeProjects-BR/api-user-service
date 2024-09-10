import { checkEmptyToNot } from '../empty_do_not_check.js';
import { checkFieldTrim } from '../check_field_remove_outer_space.js';
import { checkNoSpacesInString } from '../check_no_spaces_in_string.js';
import { checkIsValidEmail } from '../isValidEmail.js';
import { checkLength } from '../checkLength.js';

export function emailValidateSchima(email) {
  // Verificar se o campo está vazio
  const emptyCheck = checkEmptyToNot(email, 'E-mail');
  if (!emptyCheck.success) {
    return emptyCheck;
  }

  // Remover espaços no início e fim da string
  const trimmedEmail = checkFieldTrim(email);

  // Verificar se há espaços entre os caracteres
  const spaceCheck = checkNoSpacesInString(trimmedEmail, 'E-mail');
  if (!spaceCheck.success) {
    return spaceCheck;
  }

  // Verificar se o e-mail é válido
  const emailValidCheck = checkIsValidEmail(trimmedEmail);
  if (!emailValidCheck.success) {
    return emailValidCheck;
  }

  // Verificar o comprimento do e-mail.
  const lengthCheck = checkLength(email, 12, 80, 'E-mail');
  if (!lengthCheck.success) {
    return lengthCheck;
  }

  // Se todas as verificações passaram, retornar sucesso
  return {
    success: true,
    message: 'E-mail validado com sucesso.',
  };
}
