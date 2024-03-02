import crypto from 'crypto';

export const encrypt = (text: string, secretKey: string): string => {
  // createCipher is deprecated, will continue to use to keep it simple
  const cipher = crypto.createCipher('aes-256-cbc', Buffer.from(secretKey));
  const encrypted = cipher.update(text, 'utf-8', 'hex');
  return encrypted + cipher.final('hex');
}

// Decryption function
export const decrypt = (encryptedText: string, secretKey: string): string => {
  // createDecipher is deprecated, will continue to use to keep it simple
  const decipher = crypto.createDecipher('aes-256-cbc', Buffer.from(secretKey));
  const decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  return decrypted + decipher.final('utf-8');
}