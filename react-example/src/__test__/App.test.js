test("adds 1 + 2", () => {
  const value = 1 + 2

  expect(value).toBe(3);
  expect(value).toBeLessThan(5);
  expect(value).not.toBeGreaterThanOrEqual(5);
});

test("adds 0.1 + 0.2 to close to 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

// Fail
test("array [1, 2, 4, 5] contain value 3", () => {
  expect([1, 2, 4, 5]).toContain(3);
});

const fnThrowError = () => {
  throw new Error("Error");
};

// Fail
test("a function that throw error", () => {
  expect(() => fnThrowError()).toThrow();
  expect(() => fnThrowError()).toThrow('Errors');
});
