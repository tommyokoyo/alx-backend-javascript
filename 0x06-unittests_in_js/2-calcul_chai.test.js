const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should correctly perform SUM operation', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should correctly perform SUBTRACT operation', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should correctly perform DIVIDE operation', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should handle division by 0 and return Error', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should throw an error for invalid operation type', () => {
        expect(() => {
            calculateNumber('INVALID', 1.4, 4.5);
        }).to.throw(/Invalid type. Type must be SUM, SUBTRACT, or DIVIDE/);
    });
});
