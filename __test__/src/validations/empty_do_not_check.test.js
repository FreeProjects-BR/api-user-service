import { checkEmptyToNot } from '../../../src/validations/empty_do_not_check.js';

describe('checkEmptyToNot', () => {
  it('deve retornar sucesso como "false" se o valor for undefined', () => {
    const result = checkEmptyToNot(undefined, 'Nome');
    expect(result).toEqual({
      success: false,
      message: 'Nome não pode estar vazio.',
    });
  });
});
