const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(' ').map(Number))
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {
    const [[L, P], arr] = input

    const total = L * P

    const result = arr.map(n => n - total)

    return result.join(' ')
  }

  process.exit()
})