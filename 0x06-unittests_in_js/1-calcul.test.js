const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should correctly perform SUM operation', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should correctly perform SUBTRACT operation', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should correctly perform DIVIDE operation', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle division by 0 and return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should throw an error for invalid operation type', () => {
        assert.throws(() => {
            calculateNumber('INVALID', 1.4, 4.5);
        }, /Invalid type. Type must be SUM, SUBTRACT, or DIVIDE/);
    });
});
