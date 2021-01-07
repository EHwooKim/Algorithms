const input = require('fs').readFileSync('/dev/stdin').toString()

solution(input)

function solution(str) {
  let count = new Array(26).fill(-1)

  for (let i = 0; i < str.length; i++) {
    const idx = str[i].charCodeAt() - 97
    count[idx] = count[idx] === -1 ? i : count[idx]
  }
  console.log(...count)
}