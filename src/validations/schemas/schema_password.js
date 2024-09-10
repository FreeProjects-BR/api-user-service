import { checkEmptyToNot } from '../empty_do_not_check.js';
import { checkFieldTrim } from '../check_field_remove_outer_space.js';
import { checkNoSpacesInString } from '../check_no_spaces_in_string.js';
import { checkOnlySpaces } from '../check_only_spaces.js';
import { checkLength } from '../checkLength.js';
import { checkHasSpecialCharacters } from '../check_has_special_characters.js';
import { checkHasNumber } from '../check_has_number.js';
import { checkHasUpperCase } from '../check_has_capital_letters.js';
import { checkNoCommonCharacters } from '../check_no_common_characters.js';

/**
 * Valida a senha com base em várias regras.
 * @param {string} password
 * @returns {Object}
 */
export function passwordValidateSchema(password) {
  // Verificar se o campo está vazio.
  const emptyCheck = checkEmptyToNot(password, 'Senha');
  if (!emptyCheck.success) {
    return emptyCheck;
  }

  // Verificar se o campo contém apenas espaços.
  const onlySpacesCheck = checkOnlySpaces(password, 'Senha');
  if (!onlySpacesCheck.success) {
    return onlySpacesCheck;
  }

  // Remover espaços no início e no fim da string.
  const trimmedPassword = checkFieldTrim(password);

  // Verificar se há espaços entre os caracteres.
  const spaceNoCheck = checkNoSpacesInString(trimmedPassword, 'Senha');
  if (!spaceNoCheck.success) {
    return spaceNoCheck;
  }

  // Verificar o comprimento da senha.
  const lengthCheck = checkLength(trimmedPassword, 6, 20, 'Senha');
  if (!lengthCheck.success) {
    return lengthCheck;
  }

  // Verificar se a senha contém pelo menos um caractere especial.
  const specialCharCheck = checkHasSpecialCharacters(trimmedPassword, 'Senha');
  if (!specialCharCheck.success) {
    return specialCharCheck;
  }

  // Verificar se a senha contém pelo menos um número.
  const numberCheck = checkHasNumber(trimmedPassword, 'Senha');
  if (!numberCheck.success) {
    return numberCheck;
  }

  // Verificar se a senha contém pelo menos uma letra maiúscula.
  const upperCaseCheck = checkHasUpperCase(trimmedPassword, 'Senha');
  if (!upperCaseCheck.success) {
    return upperCaseCheck;
  }

  // Verificar se a senha contém caracteres ou sequências comuns.
  const commonCharCheck = checkNoCommonCharacters(trimmedPassword, 'Senha');
  if (!commonCharCheck.success) {
    return commonCharCheck;
  }

  return {
    success: true,
    message: 'Senha validada com sucesso.',
  };
}
