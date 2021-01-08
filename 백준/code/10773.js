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
  const arr = input1.map(n => +n)

  console.log(solution(arr))

  function solution(arr) {
    let totalArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        totalArr.pop()
      } else {
        totalArr.push(arr[i])
      }
    }
    return totalArr.reduce((a, b) => a + b, 0)
  }
  process.exit()
})
