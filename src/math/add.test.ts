import { add } from '././add';

test('1 + 2 => 3', () => {
  expect(add(1,2)).toBe(3);
});

test('-4 + 5 => 1', () => {
  expect(add(-4,5)).toBe(1);
});

test('0 + 0 => 0', () => {
  expect(add(0,0)).toBe(0);
});