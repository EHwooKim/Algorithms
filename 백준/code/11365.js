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

  solution(input)

  function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      console.log([...arr[i]].reverse().join(''))
    }
  }

  process.exit()
})