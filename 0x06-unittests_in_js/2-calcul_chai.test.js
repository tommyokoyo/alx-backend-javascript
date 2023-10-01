const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('Test for SUM operation', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('Test for SUBTRACT operation', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('Test for DIVIDE operation', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('Test for division by 0 and return Error', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('Test for error for invalid operation type', () => {
            expect(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }).to.throw(/Invalid type. Type must be SUM, SUBTRACT, or DIVIDE/);
        });
    });

    describe('type == "SUBTRACT"', () => {
        it('Test for SUM operation', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('Test for SUBTRACT operation', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('Test for DIVIDE operation', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('Test for division by 0 and return Error', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('Test for error for invalid operation type', () => {
            expect(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }).to.throw(/Invalid type. Type must be SUM, SUBTRACT, or DIVIDE/);
        });
    });

    describe('type == "DIVIDE"', () => {
        it('Test for SUM operation', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('Test for SUBTRACT operation', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('Test for DIVIDE operation', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('Test for division by 0 and return Error', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('Test for error for invalid operation type', () => {
            expect(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }).to.throw(/Invalid type. Type must be SUM, SUBTRACT, or DIVIDE/);
        });
    });

    describe('type == "DIVIDE AND RETURN"', () => {
        it('Test for SUM operation', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('Test for SUBTRACT operation', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('Test for DIVIDE operation', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('Test for division by 0 and return Error', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('Test for error for invalid operation type', () => {
            expect(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }).to.throw(/Invalid type. Type must be SUM, SUBTRACT, or DIVIDE/);
        });
    });
});
