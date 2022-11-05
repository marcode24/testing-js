test('test obj', () => {
  const data = { name: 'ejemplo' };
  data.lastName = 'otro';
  expect(data).toEqual({ name: 'ejemplo', lastName: 'otro' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('NombreEjemplo').toMatch(/jemplo/);
});

test('arrays - lists', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
