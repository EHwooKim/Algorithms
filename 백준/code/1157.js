const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(str) {
    str = str.toUpperCase()
  
    let count = {}
    let result = '?'
    let maxCount = 0
  
    for (const s of str) {
      count[s] = count[s] ? count[s] + 1 : 1
      
      if (count[s] > maxCount) {  
        maxCount = count[s]
        result = s
      } else if (count[s] === maxCount) {
        result = '?'
      }
    }
    return result
  }

  process.exit()
})