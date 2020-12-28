/*
  # Insertion Sort (삽입 정렬)
  - Builds up the sort by gradually creating a larger left half 
    which is always sorted
  - 새로운 값을 정렬된 배열의 올바른 위치에 삽입한다.
*/

function InsertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentValue
  }
  return arr
}

/*
  ## Time Complexity
  - General - O(N^2)
  - Best - O(N)
  - Worst - O(N^2)
*/