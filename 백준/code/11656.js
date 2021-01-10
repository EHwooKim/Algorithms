const input = require('fs').readFileSync('/dev/stdin').toString().trim()

solution(input).forEach(n => console.log(n))

function solution(str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    result.push(str.substr(i))
  }
  result.sort()
  return result
}