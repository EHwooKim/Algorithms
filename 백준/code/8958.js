const fs = require('fs')
const readline = (() => {
  let idx = 0
  const input = fs.readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const N = parseInt(readline(), 10)
solution(N)

function solution(N) {
  for (let i = 0; i < N; i++) {
    const answer = readline()
    let totalPoint = 0
    let count = 0

    for (const a of answer) {
      if (a === 'O') {
        count++
        totalPoint += count
      } else {
        count = 0
      }
    }
    console.log(totalPoint)
  }
}