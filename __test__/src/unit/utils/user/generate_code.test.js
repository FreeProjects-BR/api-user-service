import { userGenerateCode } from '../../../../../src/utils/user/generate_code.js';
import dbService from '../../../../../config/database.js';

jest.mock('../../../../../config/database.js', () => ({
  user: {
    findUnique: jest.fn(),
  },
}));

describe('userGenerateCode', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('deve gerar um código único', async () => {
    dbService.user.findUnique.mockResolvedValue(null);

    const code = await userGenerateCode();

    expect(code).toBeDefined();
    expect(typeof code).toBe('number');
    expect(code).toBeGreaterThanOrEqual(100000);
    expect(code).toBeLessThanOrEqual(999999);
  });

  test('deve lançar um erro se não conseguir gerar um código único após várias tentativas', async () => {
    dbService.user.findUnique.mockResolvedValue({}); // Simula que o código já existe

    await expect(userGenerateCode()).rejects.toThrow(
      'Unable to generate a unique code after multiple attempts.',
    );
  });

  test('deve gerar um código único mesmo com múltiplas tentativas', async () => {
    let attempts = 0;
    dbService.user.findUnique.mockImplementation(() => {
      attempts++;
      if (attempts < 10) {
        return Promise.resolve({});
      }
      return Promise.resolve(null);
    });

    const code = await userGenerateCode();

    expect(code).toBeDefined();
    expect(typeof code).toBe('number');
    expect(code).toBeGreaterThanOrEqual(100000);
    expect(code).toBeLessThanOrEqual(999999);
    expect(attempts).toBe(10);
  });
});
