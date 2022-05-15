export function base62Encode(int: number) {
  const base62 =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  while (int > 0) {
    result = base62[int % 62] + result;
    int = Math.floor(int / 62);
  }
  return result;
}
