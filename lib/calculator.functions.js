// --------------------------------------------------------------------------------
// Calculator Functions
// --------------------------------------------------------------------------------

const sum = (number1, number2) => {
     return number1 + number2;
};

const subtract = (number1, number2) => {
     return number1 - number2;
};

const multiply = (number1, number2) => {
     return number1 * number2;
};

const divide = (number1, number2) => {
     return number1 / number2;
};

const average = (number1, number2) => {
     return number1 / number2 / 2;
};

// --------------------------------------------------------------------------------
// Module Exports
// --------------------------------------------------------------------------------

module.exports = {
     sum: sum,
     subtract: subtract,
     multiply: multiply,
     divide: divide,
     average: average,
};
