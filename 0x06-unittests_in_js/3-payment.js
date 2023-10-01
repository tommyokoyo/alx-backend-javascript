const calculateNumber = require('./utils').calculateNumber;

function sendPaymentsToApi(totalAmount, totalShipping) {
    const result = calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentsToApi;