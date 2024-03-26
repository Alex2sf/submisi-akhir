const { generateRandomStringSync } = require('./utils');

describe('generateRandomStringSync function', () => {
    test('when given argument is not a number, it should throw an error', () => {
        expect(() => generateRandomStringSync('10')).toThrow();
    });

    test('when given argument is number less than equal to 0, it should throw an error', () => {
        expect(() => generateRandomStringSync(0)).toThrow();
    });

    test('when given is a valid argument, it should return random string', () => {
        expect(typeof generateRandomStringSync(10)).toBe('string');
        expect(generateRandomStringSync(10)).toHaveLength(10);
    });
});