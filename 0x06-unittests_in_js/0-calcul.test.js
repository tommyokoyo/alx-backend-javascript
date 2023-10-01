const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('Check if numbers round', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('Check if numbers round', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('Should return correct sum', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('Should return correct sum', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
