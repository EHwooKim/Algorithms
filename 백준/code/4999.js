const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const [str1, str2] = [readline(), readline()]

console.log(solution(str1, str2))

function solution(str1, str2) {
  let result = "no"
  if (str1.length >= str2.length) {
    result = "go"
  }

  return result
}
