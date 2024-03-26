const { generateRandomStringProm } = require('./utils');

describe('generateRandomStringProm', () => {
  test('should return a string of specified length', () => {
    return generateRandomStringProm(10).then(result => {
      expect(result).toHaveLength(10);
    });
  });

  test('should return an error if length is not a number', () => {
    return expect(generateRandomStringProm('abc')).rejects.toThrow('Length must be a number');
  });

  test('should return an error if length is less than 1', () => {
    return expect(generateRandomStringProm(-1)).rejects.toThrow('Length must be greater than 0');
  });
});
