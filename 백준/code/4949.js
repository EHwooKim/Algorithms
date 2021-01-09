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
    for (const a of arr) {
      if (a === '.') continue
      console.log(checkBalance(a))
    }
  }

  process.exit()
})

function checkBalance(str) {
  let turn = []
  
  for (const s of str) {
    if (s === '(') {
      turn.push(')')
    } else if (s === ')') {
      if (turn.pop() !== ')') return 'no'
    } else if (s === '[') {
      turn.push(']')
    } else if (s === ']') {
      if (turn.pop() !== ']') return 'no'
    }
  }
  if (turn.length) return 'no'

  return 'yes'
}