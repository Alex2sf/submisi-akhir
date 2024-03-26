const { generateRandomString } = require('./utils');

describe('generateRandomString', () => {
  test('should return a string of specified length', (done) => {
    generateRandomString(10, (err, result) => {
      expect(err).toBeNull();
      expect(result).toHaveLength(10);
      done();
    });
  });

  test('should return an error if length is not a number', (done) => {
    generateRandomString('abc', (err, result) => {
      expect(err).toEqual(Error('Length must be a number'));
      expect(result).toBeUndefined();
      done();
    });
  });

  test('should return an error if length is less than 1', (done) => {
    generateRandomString(-1, (err, result) => {
      expect(err).toEqual(Error('Length must be greater than 0'));
      expect(result).toBeUndefined();
      done();
    });
  });
});
