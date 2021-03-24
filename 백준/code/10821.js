const input = require('fs').readFileSync('/dev/stdin').toString()

console.log(solution(input))

function solution(str) {
  const numbers = str.split(',')
  return numbers.length
}