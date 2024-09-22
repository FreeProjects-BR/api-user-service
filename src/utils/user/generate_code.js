import dbService from '../../../config/database.js';

const generateCodeUnique = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const isCodeUnique = async (code) => {
  const existingUser = await dbService.user.findUnique({
    where: { code: code },
  });
  return !existingUser;
};

export const userGenerateCode = async () => {
  let code;
  let isUnique = false;
  const maxAttempts = 10;
  let attempts = 0;

  while (!isUnique && attempts < maxAttempts) {
    code = generateCodeUnique();
    isUnique = await isCodeUnique(code);
    attempts++;
  }

  if (!isUnique) {
    throw new Error(
      'Unable to generate a unique code after multiple attempts.',
    );
  }

  return code;
};
