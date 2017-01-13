module.exports = {
	arrayMean: function arrayMean(values = []) {
		
		var sum = function sumArray(values = []) {
			function add(a, b) {
				return a + b;
			}
				return values.reduce(add, 0);
			}
		
		var mean = sum(values)/values.length;
		return mean;
	}
}