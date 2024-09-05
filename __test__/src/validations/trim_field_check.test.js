import { fieldTrim } from '../../../src/validations/trim_field_check.js';

describe('fieldTrim', () => {
  it('deve remover espaços no início e no final de uma string', () => {
    const result = fieldTrim('   exemplo   ');
    expect(result).toBe('exemplo');
  });

  it('deve retornar a estring original se não houver espaços no início ou no final', () => {
    const result = fieldTrim('exemplo');
    expect(result).toBe('exemplo');
  });

  it('deve lançar um erro se o valor não for uma string', () => {
    expect(() => fieldTrim(123)).toThrow('O valor deve ser uma string.');
    expect(() => fieldTrim({})).toThrow('O valor deve ser uma string.');
    expect(() => fieldTrim(null)).toThrow('O valor deve ser uma string.');
  });

  it('deve retornar uma string vazia se a string for composta apenas de espaços', () => {
    const result = fieldTrim('   ');
    expect(result).toBe('');
  });
});
