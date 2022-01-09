const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch(array, 3));