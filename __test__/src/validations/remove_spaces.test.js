import { checkAndRemoveSpaces } from '../../../src/validations/remove_spaces.js';
describe('checkAndRemoveSpaces', () => {
  it('deve retornar sucesso se não houver espaços entre os caracteres', () => {
    const result = checkAndRemoveSpaces('usuario@exemplo.com');
    expect(result).toEqual({
      success: true,
      message: 'O campo está correto.',
    });
  });
  describe('checkAndRemoveSpaces', () => {
    it('deve retornar erro e mensagem se houver espaços entre os caracteres', () => {
      const result = checkAndRemoveSpaces('usuario @ exemplo . com');
      expect(result).toEqual({
        success: false,
        message: 'O campo contém espaços. Remova os espaços.',
      });
    });

    it('deve retornar erro e mensagem se o valor não for uma string', () => {
      const result = checkAndRemoveSpaces(12345, 'E-mail');
      expect(result).toEqual({
        success: false,
        message: 'E-mail deve conter caracteres.',
      });
    });

    it('deve retornar sucesso e mensagem personalizada com o campo dinâmico', () => {
      const result = checkAndRemoveSpaces('123456', 'Senha');
      expect(result).toEqual({
        success: true,
        message: 'Senha está correto.',
      });
    });
  });
});
