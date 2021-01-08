const input = require('fs').readFileSync('/dev/stdin').toString()

solution(input)

function solution(str) {
  for (let i = 0; i <= Math.floor(str.length / 10); i++) {
    console.log(str.substr(10 * i, 10))
  }
}
