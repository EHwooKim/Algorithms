/*  
  # Bubble Sort
  - A sorting algorithm where the largest values bubble up to the top
*/

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function BubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
  }
  if (noSwaps) break
  return arr
}

/**
  ## Optimization
  - 정렬이 다 되었는데도 정해진 루프를 모두 수행하는 부분을 최적화해보자
  - 안쪽 루프를 모두 수행하는 동안 swap이 한번도 이루어지지 않았다는 것은
    이미 정렬이 되었다는 것을 의미하기 때문에 noSwaps 변수를 활용하여 최적화하였다
*/
/*
  ## Time Complexity
  - General - O(N^2)
  - Best - O(N) : 대부분 정렬된 상태의 배열을 정렬할 떄..
*/