import { checkEmptyToNot } from '../../../src/validations/empty_do_not_check.js';

describe('checkEmptyToNot', () => {
  it('deve retornar sucesso como "false" se o valor for undefined', () => {
    const result = checkEmptyToNot(undefined, 'Nome');
    expect(result).toEqual({
      success: false,
      message: 'Nome não pode estar vazio.',
    });
  });

  it('deve retornar sucesso como "false" se o valor for null', () => {
    const result = checkEmptyToNot(null, 'Nome');
    expect(result).toEqual({
      success: false,
      message: 'Nome não pode estar vazio.',
    });
  });

  it('deve retornar sucesso como "false" se o valor for uma string vazia', () => {
    const result = checkEmptyToNot('', 'Nome');
    expect(result).toEqual({
      success: false,
      message: 'Nome não pode estar vazio.',
    });
  });

  it('deve retornar sucesso como "true" se o valor for preenchido', () => {
    const result = checkEmptyToNot('Valor preenchido', 'Nome');
    expect(result).toEqual({
      success: true,
      message: 'Nome está preenchido.',
    });
  });

  it('deve usar "O campo" como valor padrão se nenhum nome de campo for passado', () => {
    const result = checkEmptyToNot('valor');
    expect(result).toEqual({
      success: true,
      message: 'O campo está preenchido.',
    });
  });

  it('deve retornar "O campo não pode estar vazio." se o campo for vazio e não for fornecido um nome de campo', () => {
    const result = checkEmptyToNot('');
    expect(result).toEqual({
      success: false,
      message: 'O campo não pode estar vazio.',
    });
  });
});
