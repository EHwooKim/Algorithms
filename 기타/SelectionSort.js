/*
  # Selection Sort (선택 정렬)
  - Similar to bubble sort, but instead of first placing large valyes
    into sorted position, it places small values into sorted position
  - 반복 구간 내에서 가장 작은 값을 찾아 구간 맨 앞으로 이동
*/ 

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j <arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) swap(arr, i, minIndex)
  }
  return arr
}

const a = [3, 1, 6, 4, 2, 10]
console.log(SelectionSort(a))

/*
  ## Time Complexity
  - General - O(N^2)
  - Best - O(N^2)
  - Worst - O(N^2)
  - 매번 swap하는 버블정렬보다는 빠른편
*/