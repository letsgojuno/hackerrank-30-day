import { isPalindrome } from './';

test.each([
  ['tacocat', true],
  ['a', true],
  ['', true],
  ['abc', false]
])('isPalindrome(%s)', (a, expected) => {
  expect(isPalindrome(a)).toBe(expected);
});
