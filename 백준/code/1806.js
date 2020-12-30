const fs = require('fs')
const [length, inputs] = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, S] = length.split(' ').map(n => +n)
const arr = inputs.split(' ').map(n => +n)

console.log(solution(N, S, arr))

function solution(N, S, arr) {
  let subTotal = 0
  let subLength = N + 1

  let start = -1
  let end = -1
  
  while (end < N) {
    if (subTotal < S) {
      end++
      subTotal += arr[end]
      
    } else {
      subLength = Math.min(subLength, (end - start))
      start++
      subTotal -= arr[start]
    }
  }
  return subLength === N + 1 ? 0 : subLength
}