/**
* @name: binary-search
* @description:二分搜索
* @author: lizijie
* @update: 
*/

function binarySearch(arr, val, low = 0, high = arr.length) {
    if (low > high)
        return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < val) {
        return binarySearch(arr, val, mid + 1, high);
    } else if (arr[mid] > val) {
        return binarySearch(arr, val, low, high - 1);
    } else {
        return mid;
    }
}

export default binarySearch;