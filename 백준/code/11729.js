const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

let count = 0
let process = ''

const hanoi = (N, start, to, via) => {
  if (N === 1) {
    count += 1
    process += `${start} ${to}\n`
  } else {
    hanoi(N - 1, start, via, to)
    count += 1
    process += `${start} ${to}\n`
    hanoi(N - 1, via, to, start)
  }
}

const solution = (N, start, to, via) => {
  hanoi(N, start, to, via)
  console.log(count)
  console.log(process)
}

solution(+input, '1', '3', '2')

