const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const N = +readline()

solution(N)

function solution(N) {
  for (let i = 0; i < N; i++) {
    const [position, word] = readline().split(' ')
    const fixedWord = word.slice(0, +position - 1) + word.slice(+position)
    console.log(fixedWord)
  }
}