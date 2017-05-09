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
// function insertionSort(arr) {
// 	let newArr = [];

// 	function insert(item, index) {
// 		if (index + 1 <= newArr.length) {
// 			let arr = newArr.slice(index + 1);
// 			newArr = newArr.slice(0, index + 1);
// 			newArr.push(item, ...arr);
// 		}
// 	}
// 	for (let i = 0, len = arr.length; i < len; i++) {
// 		if (i == 0) {
// 			newArr.push(arr[i]);
// 		} else {
// 			for (let j = newArr.length - 1; j >= 0; j--) {
// 				if (newArr[j] <= arr[i]) {
// 					insert(arr[i], j);
// 					break;
// 				} else if (j == 0) {
// 					newArr.unshift(arr[i]);
// 					break;
// 				}
// 			}
// 		}
// 	}
// 	return newArr;
// }

export default insertionSort;