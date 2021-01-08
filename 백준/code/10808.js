const input = require('fs').readFileSync('/dev/stdin').toString().trim()

solution(input)

function solution(str) {
  const count = new Array(26).fill(0)

  for (const s of str) {
    const index = s.charCodeAt() - 97
    count[index] = count[index] ? count[index] + 1 : 1
  }

  console.log(...count)
}