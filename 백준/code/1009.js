const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(' ').map(Number))
}).on('close', () => {

  const [N, ...arr] = input

  solution(arr)

  function solution(arr) {
    arr.forEach(([a, b]) => {
      const computer = pow(a, b)
      console.log(computer || 10)
    })
  }

  function pow(a, b) {
    a = a % 10
    let result = a
    for (let i = 0; i < b - 1; i++) {
      result = (result * a) % 10
    }
    return result
  }

  process.exit()
})
