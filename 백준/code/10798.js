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

  console.log(solution(input))
  
  function solution(arr) {
    const maxLength = Math.max(...arr.map(n => n.length))
    let result = ''
    
    for (let i = 0; i < maxLength; i++) {
      for (const str of arr) {
        result += str[i] || ''
      }
    }
    return result
  }

  process.exit()
})