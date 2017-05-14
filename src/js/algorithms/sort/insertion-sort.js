function insertionSort(arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		let j = i - 1;
		let cache = arr[i];
		while (j >= 0 && arr[j] > cache) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = cache;
	}
	return arr;
}

export default insertionSort;