module.exports = {
	arraySum : function sumArray(values) {
		function add(a, b) {
			return a + b;
		}
		return values.reduce(add, 0);
	},
}