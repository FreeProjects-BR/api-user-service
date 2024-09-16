import crypto from 'crypto';

/**
 * Gera uma chave secreta JWT aleatória.
 * @param {number} length - O comprimento da chave em bytes.
 * @returns {string} - A chave secreta codificada em Base64.
 */
const generateJwtSecret = (length) => {
  return crypto.randomBytes(length).toString('base64');
};

// Define o comprimento da chave (em bytes)
const secretLength = 64;

// Gera a chave secreta
const jwtSecret = generateJwtSecret(secretLength);

// Exibe a chave secreta gerada
console.log('JWT_SECRET:', jwtSecret);
