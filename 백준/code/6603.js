const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const N = input.length - 1

  solution(N)

  function solution(N) {
    for (let i = 0; i < N; i++) {
      const [count, ...numbers] = input[i].trim().split(' ')
      makeLotto(numbers)(0)
      console.log()
    }
  }

  function makeLotto(arr) {
    const acc = []
    return function lotto(start) {
      if (acc.length === 6) {
        console.log(...acc)
        return
      }
      for (let i = start; i < arr.length; i++) {
        acc.push(arr[i])
        lotto(i + 1)
        acc.pop()
      }
    }
  }

  process.exit()
})
