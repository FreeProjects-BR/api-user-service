export function checkFieldTrim(value) {
  if (typeof value !== 'string') {
    throw new Error('O valor deve ser uma string.');
  }
  return value.trim();
}
