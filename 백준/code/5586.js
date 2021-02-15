const input = require('fs').readFileSync('/dev/stdin').toString()

solution(input)

function solution(str) {
  let countJ = 0
  let countI = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'J') {
      countJ += check(str, i, 'JOI')
    }
    if (str[i] === 'I') {
      countI += check(str, i, 'IOI')
    }
  }
  
  console.log(countJ, countI)
}

function check(str, start, match) {
  if (str.substr(start, 3) === match) return true
  return false
}