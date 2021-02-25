const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()
const [K, N] = readline().split(' ').map(Number)

console.log(solution(K, N))

function solution(K, N) {
  const arr = []
  for (let i = 0; i < K; i++) {
    arr.push(+readline())
  }

  let left = 0
  let right = Math.max(...arr) * 2
  let maxLength = 0

  while (true) {
    if (right - left <= 1) break

    const middle = Math.floor((left + right) / 2)
    const count = afterCutting(arr, middle)

    if (count < N) {
      right = middle
    } else if (count >= N) {
      left = middle
      maxLength = middle
    }
  }

  return maxLength
}

function afterCutting(arr, length) {
  return arr.map(line => Math.floor(line / length)).reduce((a, b) => a + b)
}
