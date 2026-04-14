const combineUsers = require('../index');

describe('combineUsers function', () => {

  test('should return an object', () => {
    const result = combineUsers(
      ["Alice", "Bob"],
      ["Charlie"],
      ["David", "Eve"]
    );

    expect(typeof result).toBe('object');
  });

  test('should contain a users array', () => {
    const result = combineUsers(
      ["Alice", "Bob"],
      ["Charlie"]
    );

    expect(Array.isArray(result.users)).toBe(true);
  });

  test('should correctly merge multiple arrays using spread operator', () => {
    const result = combineUsers(
      ["John", "Jane"],
      ["Mike"],
      ["Emma", "Lisa"]
    );

    expect(result.users).toEqual([
      "John",
      "Jane",
      "Mike",
      "Emma",
      "Lisa"
    ]);
  });

  test('should handle a single array input', () => {
    const result = combineUsers(
      ["SoloUser"]
    );

    expect(result.users).toEqual(["SoloUser"]);
  });

  test('should include merge_date property', () => {
    const result = combineUsers(
      ["A"],
      ["B"]
    );

    expect(result).toHaveProperty('merge_date');
  });

});