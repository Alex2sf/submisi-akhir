const { generateRandomString } = require('./utils');

describe('generateRandomString function', () => {
    test('when given argument is not a number, it should throw error', (done) => {
        generateRandomString('10', (error) => {
            expect(error).not.toBeNull();

            done();
        });
    });

    test('when given argument is a number less than equal to 0, it should throw error', (done) => {
        generateRandomString(0, (error) => {
            expect(error).not.toBeNull();
            
            done();
        });
    });

    test('when given argument is valid, it should return random string', (done) => {
        generateRandomString(10, (error, result) => {
            expect(error).toBeNull();
            expect(result).not.toBeNull();
            expect(result).toHaveLength(10);
            
            done();
        });
    });
});