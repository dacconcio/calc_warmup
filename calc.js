function Calc() {}

Calc.prototype.add = function(val1, val2) {
	return val1 + val2;
};

Calc.prototype.subtract = function(val1, val2) {
	return val1 - val2;
};

Calc.prototype.multiply = function(val1, val2) {
	return val1 * val2;
};

Calc.prototype.divide = function(val1, val2) {
	return val1 / val2;
};

module.exports = Calc;
