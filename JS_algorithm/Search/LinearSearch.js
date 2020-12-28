/*
  # LinearSearch
  - 배열의 앞쪽부터 값을 비교하며 원하는 값을 찾는다.

  ## BIG O 
  - Best - O(1) : 원하는 값을 처음에 찾았을 경우.. 
  - Worst - O(N) : 원하는 값이 배열 끝에 있을 경우..
  - Average - O(N)
*/

/* 
  ## Exercise
  Write a function called linearSearch which accepts an array, 
  and returns  the index at which the value exists.
  If the value does not exist in the array. return -1.
  Don't use indexOf th implement this function
*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}
linearSearch([1, 2, 3, 4, 5], 3) // 2
