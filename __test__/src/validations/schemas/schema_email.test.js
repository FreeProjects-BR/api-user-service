import { emailValidateSchima } from '../../../../src/validations/schemas/schema_email.js';
import { checkEmptyToNot } from '../../../../src/validations/empty_do_not_check.js';
import { checkFieldTrim } from '../../../../src/validations/trim_field_check.js';
import { checkSpacesInString } from '../../../../src/validations/check_spaces_in_string.js';
import { checkIsValidEmail } from '../../../../src/validations/isValidEmail.js';

// Mocks para as funções importadas
jest.mock('../../../../src/validations/empty_do_not_check.js', () => ({
  checkEmptyToNot: jest.fn(),
}));

jest.mock('../../../../src/validations/trim_field_check.js', () => ({
  checkFieldTrim: jest.fn(),
}));

jest.mock('../../../../src/validations/check_spaces_in_string.js', () => ({
  checkSpacesInString: jest.fn(),
}));

jest.mock('../../../../src/validations/isValidEmail.js', () => ({
  checkIsValidEmail: jest.fn(),
}));

describe('emailValidateSchima', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpa os mocks antes de cada teste
  });

  it('deve retornar erro se o e-mail estiver vazio', () => {
    const mockEmptyResponse = {
      success: false,
      message: 'E-mail não pode estar vazio.',
    };
    checkEmptyToNot.mockReturnValueOnce(mockEmptyResponse);

    const result = emailValidateSchima('');
    expect(result).toEqual(mockEmptyResponse);
    expect(checkEmptyToNot).toHaveBeenCalledWith('', 'E-mail');
  });

  it('deve remover espaços no início e no final do e-mail', () => {
    const mockEmptyResponse = {
      success: true,
      message: 'E-mail está preenchido.',
    };
    const mockTrimmedEmail = 'email@dominio.com';
    checkEmptyToNot.mockReturnValueOnce(mockEmptyResponse);
    checkFieldTrim.mockReturnValueOnce(mockTrimmedEmail);
    checkSpacesInString.mockReturnValueOnce({ success: true });
    checkIsValidEmail.mockReturnValueOnce({ success: true });

    const result = emailValidateSchima('  email@dominio.com  ');
    expect(result).toEqual({
      success: true,
      message: 'E-mail validado com sucesso.',
    });
    expect(checkFieldTrim).toHaveBeenCalledWith('  email@dominio.com  ');
  });

  it('deve retornar erro se o e-mail contiver espaços entre os caracteres', () => {
    const mockEmptyResponse = {
      success: true,
      message: 'E-mail está preenchido.',
    };
    const mockTrimmedEmail = 'email@dominio.com';
    const mockSpaceError = {
      success: false,
      message: 'E-mail contém espaços. Remova os espaços.',
    };
    checkEmptyToNot.mockReturnValueOnce(mockEmptyResponse);
    checkFieldTrim.mockReturnValueOnce(mockTrimmedEmail);
    checkSpacesInString.mockReturnValueOnce(mockSpaceError);

    const result = emailValidateSchima('email @dominio.com');
    expect(result).toEqual(mockSpaceError);
    expect(checkSpacesInString).toHaveBeenCalledWith(
      mockTrimmedEmail,
      'E-mail',
    );
  });

  it('deve retornar erro se o e-mail for inválido', () => {
    const mockEmptyResponse = {
      success: true,
      message: 'E-mail está preenchido.',
    };
    const mockTrimmedEmail = 'email@dominio.com';
    const mockInvalidEmail = {
      success: false,
      message: 'O e-mail é inválido.',
    };
    checkEmptyToNot.mockReturnValueOnce(mockEmptyResponse);
    checkFieldTrim.mockReturnValueOnce(mockTrimmedEmail);
    checkSpacesInString.mockReturnValueOnce({ success: true });
    checkIsValidEmail.mockReturnValueOnce(mockInvalidEmail);

    const result = emailValidateSchima('email@dominio');
    expect(result).toEqual(mockInvalidEmail);
    expect(checkIsValidEmail).toHaveBeenCalledWith(mockTrimmedEmail);
  });

  it('deve retornar sucesso para um e-mail válido', () => {
    const mockEmptyResponse = {
      success: true,
      message: 'E-mail está preenchido.',
    };
    const mockTrimmedEmail = 'email@dominio.com';
    checkEmptyToNot.mockReturnValueOnce(mockEmptyResponse);
    checkFieldTrim.mockReturnValueOnce(mockTrimmedEmail);
    checkSpacesInString.mockReturnValueOnce({ success: true });
    checkIsValidEmail.mockReturnValueOnce({
      success: true,
      message: 'O e-mail é válido.',
    });

    const result = emailValidateSchima('email@dominio.com');
    expect(result).toEqual({
      success: true,
      message: 'E-mail validado com sucesso.',
    });
    expect(checkIsValidEmail).toHaveBeenCalledWith(mockTrimmedEmail);
  });
});
