const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n => n.trim())

const [N, ...arr] = input

console.log(solution(arr))

function solution(arr) {
  const result = arr.map(n => [...n])
    .map(n => n.map(UpperToLower))
    .map(n => n.join(''))
    .join('\n')
  return result
}

function UpperToLower(alpha) {
  let charCode = alpha.charCodeAt(alpha)
  if (charCode < 97) {
    charCode += 32
  }
  return String.fromCharCode(charCode)  
}
