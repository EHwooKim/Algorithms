let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
input = input.map(n => n.trim())

console.log(solution(input))

function solution(arr) {
  const count = new Array(26).fill(0)

  for (const str of arr) {
    for (const s of str) {
      const index = s.charCodeAt() - 97
      if (index < 0) continue
      count[index] += 1
    }
  }

  let result = ''
  const maxLength = Math.max(...count)
  
  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxLength) {
      result += String.fromCharCode(i + 97)
    }
  }
  return result
}


