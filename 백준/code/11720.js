const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[1]

console.log(solution(input))

function solution(numStr) {
  let result = 0
  for (const n of numStr) {
    result += +n
  }
  return result
}