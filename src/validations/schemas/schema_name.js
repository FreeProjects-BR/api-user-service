import { checkEmptyToNot } from '../empty_do_not_check.js';
import { checkFieldTrim } from '../check_field_remove_outer_space.js';
import { checkOnlySpaces } from '../check_only_spaces.js';
import { checkNoSpecialCharacters } from '../check_no_special_characters.js';
import { checkNoHasNumber } from '../check_no_has_number.js';
import { checkLength } from '../checkLength.js';

export function nameValidateSchema(name) {
  // Verificar se o campo está vazio.
  const emptyCheck = checkEmptyToNot(name, 'Nome');
  if (!emptyCheck.success) {
    return emptyCheck;
  }

  // Verificar se o campo contém apenas espaços.
  const spaceCheck = checkOnlySpaces(name, 'Nome');
  if (!spaceCheck.success) {
    return spaceCheck;
  }

  // Verificar se o nome contém números.
  const numberCheck = checkNoHasNumber(name, 'Nome');
  if (!numberCheck.success) {
    return numberCheck;
  }

  // Remover espaços no início e fim da string.
  const trimName = checkFieldTrim(name);

  // Verificar se não contém caracteres especiais.
  const specialCharCheck = checkNoSpecialCharacters(trimName, 'Nome');
  if (!specialCharCheck.success) {
    return specialCharCheck;
  }

  // Verificar o comprimento do name.
  const lengthCheck = checkLength(name, 3, 80, 'Nome');
  if (!lengthCheck.success) {
    return lengthCheck;
  }

  // Se todas as verificações passaram, retornar sucesso.
  return {
    success: true,
    message: 'Nome validado com sucesso.',
  };
}
