const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(solution(input))

function solution(str) {
  for (let i = 0; i < Math.floor(str.length / 2) ; i++) {
    if (str[i] !== str[str.length -1 -i]) {
      return 0
    }
  }
  return 1
}