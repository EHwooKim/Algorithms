const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const strReverse = str => str.split('').reverse().join('')

const N = +readline()

solution(N)

function solution(N) {
  for (let i = 0; i < N; i++) {
    const str = readline()
    const reversed = str.split(' ').map(strReverse).join(' ')
    console.log(reversed)
  }
}