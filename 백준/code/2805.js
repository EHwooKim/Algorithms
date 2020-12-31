const fs = require('fs')
const [input1, input2] = fs.readFileSync('/dev/stdin').toString().split('\n')


const [N, M] = input1.split(' ').map(n => +n)
const arr = input2.split(' ').map(n => +n)


console.log(solution(N, M, arr))

function solution(N, M, arr) {
  arr.sort((a, b) => a - b)
  
  let left = 0
  let right = arr[arr.length - 1] - 1
  
  let resultHeight = 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const totalHeight = calcHeight(arr, mid)
    if (totalHeight > M) {
      left = mid + 1
      resultHeight = mid
    } else if (totalHeight < M) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return resultHeight
}


function calcHeight(arr, height) {
  let result = 0
  for (const a of arr) {
    if (a > height) {
      result += a - height
    }
  }
  return result
}