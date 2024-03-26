const { generateRandomStringProm } = require('./utils');

describe('generateRandomStringProm function', () => {
    test('when given argument is not a number, it should rejected', async () => {
        await expect(generateRandomStringProm('10')).rejects.toThrow();
    });

    test('when given argument is a number less than equal to 0, it should rejected', async () => {
        await expect(generateRandomStringProm(0)).rejects.toThrow();
    });

    test('when given argument is valid, it should resolved', async () => {
        const result = await generateRandomStringProm(10);

        expect(() => result).not.toThrow();
        expect(result).toHaveLength(10);
    });
});