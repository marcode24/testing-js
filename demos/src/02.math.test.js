const { sum, multiply, divide } = require('./02.math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('1 * 3 should be 3', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test('6 / 3 should be 2', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('should return null if divide for 0', () => {
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});
