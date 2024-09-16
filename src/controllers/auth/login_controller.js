import { userLoginServices } from '../../services/auth/login.js';

export const userLoginController = async (req, res, next) => {
  try {
    const { token } = await userLoginServices(req);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
