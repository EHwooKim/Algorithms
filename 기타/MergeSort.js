/*
  # Merge Sort
  - It's a combination of two things = merging and sorting
  - Exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by decomposing an array into smaller arrays of 0 or 1 elements,
    then building up a newly sorted array
  - 주어진 배열을 원소개 한개인 배열로 나누고, 정렬을 하며 병합시킨다.
  - 정렬된 배열끼리의 병합이므로 값을 비교하기 용이하다.
*/

/*
  ## Merging Array Pseudocode
  - Create am empty array, take a look at the smallest values in each input array
  - while there are stil values we haven't looked at...
    * If the value in the first array is smaller than the value in the second array,
    push the value in the first array into our results and move on to the next value
    in the first array.
    * If the value in the first array is larger than the value in the second array,
    push the value in the second array into our results and move on to the next value
    in the second array.
    * Once we exhaust one array, push in all remaining values from the other array
*/

function merge(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

// console.log(merge([100], [1, 2, 3, 5, 6]))

/*
  ## MergeSort Pseudocode
  - Break up the array into halves until you have arrays that
    are empty or have one element
  - Once you have smaller sorted arrays, merge those arrays with other sorted 
    arrays until you are back at the full length of the array
  - Once the array has been merged back together, return the merged(and sorted) array
*/

function MergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = MergeSort(arr.slice(0, mid))
  let right = MergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(MergeSort([6, 1, 2, 7, 20, 40, 20]))


/*
  ## Time Complexity
  - General - O(N lonN)
  - Best - O(N lonN)
  - Worst - O(N lonN)
*/
