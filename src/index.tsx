const ChiaWalletSdk = require('./NativeChiaWalletSdk').default;

export function multiply(a: number, b: number): number {
  return ChiaWalletSdk.multiply(a, b);
}
