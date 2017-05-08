function selectionSort(arr) {
	function change(index1, index2) {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	}

	function min(arr) {
		let min;
		let index;
		for (let i = 0, len = arr.length; i < len; i++) {
			if (i == 0) {
				min = arr[i];
				index = i;
			} else if (arr[i] < min) {
				min = arr[i];
				index = i;
			}
		}
		return index;
	}
	for (let i = 0, len = arr.length; i < len - 1; i++) {
		let minIndex = min.call(null, arr.slice(i));
		change(i, minIndex + i);
	}
	return arr;
}

export default selectionSort;