const fs = require('fs')
const [N, input] = fs.readFileSync('/dev/stdin').toString().split('\n')

const arr = input.split(' ').map(n => +n)

console.log(...solution(N, arr))

function solution(N, arr) {
  arr.sort((a, b) => a - b)

  if (arr[N - 1] < 0) {
    return [arr[N - 2], arr[N - 1]]
  } else if (arr[0] > 0) {
    return [arr[0], arr[1]]
  }

  let min = 2000000001
  let result

  let left = 0
  let right = N - 1
  let pairSum = arr[left] + arr[right]

  while(left < right) {
    pairSum = arr[left] + arr[right]
    if (Math.abs(min) > Math.abs(pairSum)) {
      min = pairSum
      result = [arr[left], arr[right]]
    }
    if (Math.abs(arr[left]) <= Math.abs(arr[right])) {
      right--
    } else {
      left++
    }
  }
  
  return result
}