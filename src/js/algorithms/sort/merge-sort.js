function mergeSort(arr) {
	function merge(leftArr, rightArr) {
		let result = [];
		let leftIndex = 0;
		let rightIndex = 0;
		let leftLength = leftArr.length;
		let rightLength = rightArr.length;
		while (leftIndex < leftLength && rightIndex < rightLength) {
			if (leftArr[leftIndex] < rightArr[rightIndex]) {
				result.push(leftArr[leftIndex]);
				leftIndex++;
			} else {
				result.push(rightArr[rightIndex]);
				rightIndex++;
			}
		}
		return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
	}

	function mergeSort(arr) {
		let result;
		if (arr.length < 2) {
			result = arr;
		} else {
			let middleIndex = Math.floor(arr.length / 2);
			let leftArr = arr.slice(0, middleIndex);
			let rightArr = arr.slice(middleIndex);
			let params = merge(mergeSort(leftArr), mergeSort(rightArr));
			params.unshift(0, arr.length);
			Array.prototype.splice.apply(arr, params);
			result = arr;
		}
		return result;
	}

	return mergeSort(arr);
}

export default mergeSort;