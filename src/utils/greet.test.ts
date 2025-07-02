import { greet } from './greet';

test('greets the user by name', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});