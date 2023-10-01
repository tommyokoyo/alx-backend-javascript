const Utils = {
    calculateNumber(type, a, b) {
        if (typeof a !== 'number' && typeof b !== 'number') {
            throw new Error('Args must be numbers');
        }
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        switch (type) {
            case 'SUM':
                return roundedA + roundedB;
            case 'SUBTRACT':
                return roundedA - roundedB;
            case 'DIVIDE':
                if (roundedB === 0) {
                    return 'Error'
                } else {
                    return roundedA/roundedB;
                }
            default:
                throw new Error('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE');
        }
    }
};

module.exports = Utils;