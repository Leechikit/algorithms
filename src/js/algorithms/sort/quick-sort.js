function quickSort(arr) {
	function change(index1, index2) {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	}

	function partition(left, right) {
		dealPivot(left, right);
		const pivot = arr[Math.floor((left + right) / 2)];
		let i = left;
		let j = right;
		while (i <= j) {
			while (arr[i] < pivot) {
				i++;
			}
			while (arr[j] > pivot) {
				j--;
			}
			if (i < j) {
				change(i, j);
			}
			i++;
			j--;
		}
		if (left < i - 1) {
			partition(left, i - 1);
		}
		if (i < right) {
			partition(i, right);
		}
	}

	function dealPivot(left, right) {
		const mid = (left + right) / 2;
		if (arr[left] > arr[mid]) {
			change(left, mid);
		}
		if (arr[left] > arr[right]) {
			change(left, right);
		}
		if (arr[right] < arr[mid]) {
			change(right, mid);
		}
	}

	if (arr.length < 2) return arr;

	partition(0, arr.length - 1);

	return arr;
}

module.exports = quickSort;