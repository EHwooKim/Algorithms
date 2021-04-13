const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line.trim().split(' ').map(Number)
}).on('close', () => {

  console.log(solution(...input))

  function solution(x, y, w, h) {
    return Math.min(x, y, w - x, h - y)
  }

  process.exit()
})