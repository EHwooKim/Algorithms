const fs = require('fs')
const input = parseInt(fs.readFileSync('/dev/stdin').toString(), 10)

solution(input)

function solution(N) {
  for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i))
  }
}