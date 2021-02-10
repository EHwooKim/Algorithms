const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)

console.log(solution(input))

function solution(numbers) {
  const [A, B, C] = numbers
  if (B >= C) return -1

  let result = Math.floor(A / (C - B))

  if (A >= (C - B) * result) {
    result += 1
  }

  return result
}

