import { checkFieldTrim } from '../../../src/validations/trim_field_check.js';

describe('fieldTrim', () => {
  it('deve remover espaços no início e no final de uma string', () => {
    const result = checkFieldTrim('   exemplo   ');
    expect(result).toBe('exemplo');
  });

  it('deve retornar a estring original se não houver espaços no início ou no final', () => {
    const result = checkFieldTrim('exemplo');
    expect(result).toBe('exemplo');
  });

  it('deve lançar um erro se o valor não for uma string', () => {
    expect(() => checkFieldTrim(123)).toThrow('O valor deve ser uma string.');
    expect(() => checkFieldTrim({})).toThrow('O valor deve ser uma string.');
    expect(() => checkFieldTrim(null)).toThrow('O valor deve ser uma string.');
  });

  it('deve retornar uma string vazia se a string for composta apenas de espaços', () => {
    const result = checkFieldTrim('   ');
    expect(result).toBe('');
  });
});
