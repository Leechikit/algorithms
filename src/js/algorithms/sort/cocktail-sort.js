function cocktailSort(arr) {
	let left = 0;
	let right = arr.length - 1;

	function change(index1, index2) {
		if (arr[index1] > arr[index2]) {
			[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
		}
	}
	while (left < right) {
		for (let i = left; i < right; i++) {
			change(i, i + 1);
		}
		right--;
		for (let i = right; i > left; i--) {
			change(i - 1, i);
		}
		left++;
	}
	return arr;
}

export default cocktailSort;

// len-2 ~ 0
// len-3 ~ 1