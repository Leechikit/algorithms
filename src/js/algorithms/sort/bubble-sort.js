function bubbleSort(arr) {
	function change(index1, index2) {
		if (arr[index1] > arr[index2]) {
			[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
		}
	}
	for (let i = 0, len = arr.length; i < len - 1; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			change(j, j + 1);
		}
	}
	return arr;
}

export default bubbleSort;