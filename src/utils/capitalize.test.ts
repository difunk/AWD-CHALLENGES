import { capitalize } from "./capitalize";

test('capitalizes a single lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes a single lowercase word', () => {
  expect(capitalize('javaScript')).toBe('JavaScript');
});

test('capitalizes a single lowercase word', () => {
  expect(capitalize('!test')).toBe('!test');
});