import { userRegisterModel } from '../../../../../../src/models/user/createRecords/register.js';
import dbService from '../../../../../../config/database.js';

jest.mock('../../../../../../config/database.js', () => ({
  user: {
    create: jest.fn(),
  },
}));

describe('userRegisterModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve criar um novo usuário com sucesso', async () => {
    const userData = {
      email: 'test@example.com',
      name: 'Test User',
      active: true,
      code: 123456,
    };

    const mockNewUser = {
      id: 1,
      createdAt: new Data(),
      updatedAt: new Data(),
      email: 'test@exemple.com',
      active: true,
      code: 123456,
    };

    dbService.user.create.mockResolvedValue(mockNewUser);

    const result = await userRegisterModel(userData);

    expect(dbService.user.create).toHaveBeenCalledTimes(1);
    expect(dbService.user.create).toHaveBeenCalledWith({
      data: userData,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        name: true,
        code: true,
      },
    });

    expect(result).toEqual({
      statusCode: 201,
      message: 'Usuário criado com sucesso.',
      data: mockNewUser,
    });
  });
});
