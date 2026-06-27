export function createNonce(length = 32): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let nonce = '';

  for (let i = 0; i < length; i++) {
    nonce += chars.charAt(
      Math.floor(Math.random() * chars.length),
    );
  }

  return nonce;
}