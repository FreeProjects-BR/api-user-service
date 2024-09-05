import { checkIsValidEmail } from '../../../src/validations/isValidEmail.js';

describe('checkIsValidEmail', () => {
  it('deve retornar sucesso e a mensagem para um e-mail válido', () => {
    const result = checkIsValidEmail('usuario@exemplo.com');
    expect(result).toEqual({
      success: true,
      message: 'O e-mail é válido.',
    });
  });

  it('deve retornar erro e mensagem se o e-mail não contém 0 "@"', () => {
    const result = checkIsValidEmail('usuarioexemplo.com');
    expect(result).toEqual({
      success: false,
      message: 'O e-mail é inválido.',
    });
  });

  it('deve retornar erro e mensagem ae o e-mail não contém o domínio', () => {
    const result = checkIsValidEmail('usuario@');
    expect(result).toEqual({
      success: false,
      message: 'O e-mail é inválido.',
    });
  });

  it('deve retornar erro e mensagem se o e-mail contém espaços', () => {
    const result = checkIsValidEmail(' usuario@exemplo.com');
    expect(result).toEqual({
      success: false,
      message: 'O e-mail é inválido.',
    });
  });

  it('deve retornar erro e mensagem se o e-mail não contém um domínio válido após o ponto', () => {
    const result = checkIsValidEmail('usuario@exemplo');
    expect(result).toEqual({
      success: false,
      message: 'O e-mail é inválido.',
    });
  });
});
