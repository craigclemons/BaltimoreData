module.exports = {
	arrayMedian: function arrayMedian(values = []) {
		var sortedValues = values.sort();

		function median(sortedValues) {
			const lowMiddle = Math.floor((sortedValues.length - 1) / 2);
			const highMiddle = Math.ceil((sortedValues.length - 1) / 2);
			const median = (sortedValues[lowMiddle] + sortedValues[highMiddle]) / 2;
			return median;
		}
		return median(sortedValues);
	}
}