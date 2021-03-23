const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(''))

solution(input)

function solution(arr) {
  const result = arr.map(n => longestLength(n))
  result.forEach(n => console.log(n))
}

function longestLength(str) {
  let maxLength = 0
  let count = 0
  let current = ''

  for (let i = 0; i < 8; i++) {
    const s = str[i]
    if (current !== s) {
      count = 0
      current = s
    }
    count += 1
    maxLength = Math.max(maxLength, count)
  }

  return maxLength
}

