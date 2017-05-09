function quickSort(arr) {
	function change(index1, index2) {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	}

	function partition(left, right) {
		if (left < right) {
			let value = arr[left];
			let index = left - 1;
			for (let i = left + 1; i <= right; i++) {
				if (arr[i] <= value) {
					index++;
					change(i, index);
				}
			}
			partition(left, index);
			partition(index + 1, right);
		}
	}

	partition(0, arr.length - 1);

	return arr;
}

export default quickSort;