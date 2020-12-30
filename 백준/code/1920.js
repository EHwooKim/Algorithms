const fs = require('fs')
const [N, input1, M, input2] = fs.readFileSync('/dev/stdin').toString().split('\n')

const arr1 = input1.split(' ').map(n => +n)
const arr2 = input2.split(' ').map(n => +n)

solution(+N, arr1, +M, arr2)

function solution(N, arr1, M, arr2) {
  arr1.sort((a, b) => a - b)

  for (const target of arr2) {
    let left = 0
    let right = N - 1
    let printed = null

    while (left <= right) {
      printed = 0
      const mid = Math.floor((left + right) / 2)
      if (arr1[mid] === target) {
        printed = 1
        break
      } else if (arr1[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    console.log(printed)
  }
}