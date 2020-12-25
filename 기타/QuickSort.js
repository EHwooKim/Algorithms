/*
  #  QuickSort
  - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by selecting one element (called the 'pivot') and finding the index
    where the pivot should end up in the sorted array
  - Once the pivot is positioned appropriately, quick sort can be applied
    on either side of the pivot
*/
/*
  ## Pivot Helper
  - In order to implement merge sort, it's useful to first implement a function
    responsible arranging elements in an array on either side of a pivot 
  - Given an array, this helper function should designate an element as the pivot
  - It should then rearrange elements in the array so that all values less than
    the pivot are moved to the left of the pivot, and all valyes greater than the pivit
    are moved to the right of the pivot.
  - The helper should do this in place, that is, it should not create a new array
  - When complete, the helper should return the index of the pivot

  ## Picking a pivot
  - THe runtime of quick sort depends in part on how one selects the pivot
  - Ideally, the pivot should be chosen sh that it's roughly the median value
    in the data set you're sorting
  - For simplicity, we'll always choose the pivot to be the first element
    (we'll talk about consequences of this later)
*/
/*
  ## Pivot Helper Example
  let arr = [5, 2, 1, 8, 4, 7, 6, 3]
  pivot(arr) // 첫번째 요소인 5가 위치해야하는 인덱스 4가 리턴되도록
*/
/*
  ## Pivot Pseudocode
  - It will help to accept three arguments: an array, a start index, and an end index
    (these can default to 0 and the array length minus 1, respectively)
  - Grab the pivot from the start of the array
  - Store the current pivot index in a variable 
    (this will keep track of where the pivot should end up)
  - Loop through the array from the start until the end
    * If the pivot is greater than the current element, increment the
      pivot index variable and then swap the current element with the element at the pivot index
  - Swap the starting element(i.e the pivot) with the pivot index
  - Return the pivot index
*/

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start, end) {
  let pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, i, swapIndex)
    }
  }
  swap(arr, start, swapIndex)
  return swapIndex
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

/*
  ## QuickSort Pseudocode
  - Call the pivot helper on the array
  - When the helper returns to you the updated pivot index,
    recursively call the pivot helper on the subarray to the left fo that index,
    and the subarray to the right of that index
*/

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    QuickSort(arr, left, pivotIndex - 1)
    QuickSort(arr, pivotIndex + 1, right)
  }
  return arr
}


/*
  ## Time Complexity
  - General - O(N lon N)
  - Best - O(N lon N)
  - Worst - O(N^2)
*/