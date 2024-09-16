import cron from 'node-cron';
import dbService from '../../config/database.js';

export const cleanExpiredTokens = async () => {
  const now = new Date();

  try {
    const deletedTokens = await dbService.userToken.deleteMany({
      where: {
        expiresAt: {
          lt: now,
        },
      },
    });

    console.log(`${deletedTokens.count} tokens expirados foram removidos.`);
  } catch (error) {
    console.error('Erro ao limpar tokens expirados:', error);
  }
};
