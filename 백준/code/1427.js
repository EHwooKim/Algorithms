const input = require('fs').readFileSync('/dev/stdin').toString()

console.log(solution(input))

function solution(str) {
  const strArr = str.split('')
  strArr.sort((a, b) => b - a)
  return strArr.join('')
}