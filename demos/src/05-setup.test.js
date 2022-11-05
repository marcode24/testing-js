describe('Set', () => {
  beforeAll(() => {
    // up DB other services before all cases
  });

  afterAll(() => {
    // down DB
  });

  beforeEach(() => {
    // before each case
  });

  afterEach(() => {
    // after each case
  });

  test('case 1', () => {
    expect(1 + 2).toBe(3);
  });

  test('case 2', () => {
    expect(1 + 4).toBe(5);
  });

  describe('other group', () => {
    test('case 3', () => {
      expect(1 + 2).toBe(3);
    });

    test('case 4', () => {
      expect(1 + 4).toBe(5);
    });
  });
});
