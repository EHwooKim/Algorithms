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
  const [N, ...input1] = input
  const arr = input1.map(n => n.split(',').map(n => +n))
  const add = arr => arr[0] + arr[1]

  solution(arr)

  function solution(arr) {
    arr.map(add).forEach(n => console.log(n))
  }

  process.exit()
})