const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberSpy;

    beforeEach(() => {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        // Restore the spy after each test
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', () => {
        sendPaymentRequestToApi(100, 20);

        // Ensure that Utils.calculateNumber was called with 'SUM', 100, and 20
        sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    });

    it('should log the correct total', () => {
        // Stub the console.log method to capture the output
        const consoleLogStub = sinon.stub(console, 'log');

        sendPaymentRequestToApi(100, 20);

        // Ensure that console.log was called with the correct message
        sinon.assert.calledWithExactly(consoleLogStub, 'The total is: 120');

        // Restore the console.log stub
        consoleLogStub.restore();
    });
});
