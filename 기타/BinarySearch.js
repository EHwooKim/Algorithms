/*
  # BinarySearch
  - LinearSearch는 값을 한개씩 비교하여 필요없는 값을 하나씩 지워나가지만
    BinarySearch는 필요없는 값을 절반씩 지워나갈 수 있어 더 빠르게 검색이 가능하다.
  - 정렬된 배열에서만 사용할 수 있다.
  ## BIG O 
  - Best - O(1) : 원하는 값을 처음에 찾았을 경우.. 
  - Worst - O(log N) : 원하는 값이 배열 끝에 있을 경우..
  - Average - O(log N)
*/

/*
  ## BinarySearch Exercise
  Write a function called binarySearch which accepts a sorted array 
  and returns the index at which the value exists.
  Otherwise, return -1.
  This algorithm should be more efficient than linearSearc  
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1
  
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (arr[middle] === target) {
      return middle
    } else if (arr[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

console.log(BinarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(BinarySearch([
  5, 6, 10, 13, 14, 28, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
],10)) // 2