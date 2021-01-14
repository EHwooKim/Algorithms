const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

console.log(solution(input))

function solution(str) {
  const [str1, str2] = str.split(' ')
  const n = str1.length
  const m = str2.length
  let MIN = 100
  for (let i = 0; i <= (m - n); i++) {
    let count = 0
    for (let j = 0; j < n; j++) {
      if (str1[j] !== str2[i + j]) count += 1
    }
    MIN = Math.min(MIN, count)
  }
  return MIN
}