export function isPalindrome(input: string): boolean {
  if (input.length <= 1) return true;
  const [start, end] = [input.slice(0, 1), input.slice(-1)];

  return start === end && isPalindrome(input.slice(1, -1));
}
