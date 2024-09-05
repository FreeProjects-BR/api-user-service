import { passwordNewEncrypt } from '../../../../../src/utils/password/password_new.js';
import bcrypt from 'bcrypt';

jest.mock('bcrypt');

describe('passwordNewEncrypt', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve criptografar a senha corretamente', async () => {
    const password = 'SenhaForte123';
    const hashedPasswordMock = 'hashed_password_mock';

    bcrypt.hash.mockResolvedValueOnce(hashedPasswordMock);

    const result = await passwordNewEncrypt(password);

    expect(result).toHaveProperty('hashedPassword', hashedPasswordMock);

    expect(result).toHaveProperty('statusCode', 200);
    expect(bcrypt.hash).toHaveBeenCalledWith(password, 10);
  });

  it('deve lançar um erro se a senha não for fornecida', async () => {
    expect.assertions(2);

    try {
      await passwordNewEncrypt('');
    } catch (error) {
      expect(error.message).toBe('A senha é obrigatória.');
      expect(error.statusCode).toBe(400);
    }
  });

  it('deve lançar um erro se ocorrer uma falha durante a criptografia', async () => {
    const password = 'SenhaForte123';
    const erroMock = new Error('Erro ao criptografar a senha.');

    bcrypt.hash.mockRejectedValueOnce(erroMock);

    expect.assertions(3);

    try {
      await passwordNewEncrypt(password);
    } catch (error) {
      expect(error.message).toBe('Erro ao criptografar a senha.');
      expect(error.statusCode).toBe(500);
      expect(bcrypt.hash).toHaveBeenCalledWith(password, 10);
    }
  });
});
