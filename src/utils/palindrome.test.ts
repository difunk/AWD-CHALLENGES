import { isPalindrome } from "./palindrome";

test('detects palindromes', () => {
  expect(isPalindrome('level')).toBe(true);
  expect(isPalindrome('test')).toBe(false);
  expect(isPalindrome('madam')).toBe(true);
  expect(isPalindrome('')).toBe(true);
});