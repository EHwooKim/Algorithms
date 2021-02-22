const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const [N, K] = input[0].trim().split(' ').map(Number)
const arr = input[1].trim().split(',').map(Number)

console.log(solution(N, K, arr))

function solution(N, K, arr) {
  for (let i = 0; i < K; i++) {
    arr = createNewArr(arr)
  }
  return arr.join(',')
}

function createNewArr(arr) {
  const result = []
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i + 1] - arr[i])
  }
  return result
}