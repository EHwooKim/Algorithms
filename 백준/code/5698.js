const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  
  console.log(solution(input))

  function solution(arr) {
  
    const result = arr.map(str => {
  
      const splittedStr = str.split(' ')
      const startWord = splittedStr[0][0].toLowerCase()
  
      return splittedStr.every(
        s => s[0].toLowerCase() === startWord
      ) ? 'Y' : 'N'
    })
  
    return result.slice(0, result.length - 1).join('\n')
  }

  process.exit()
})


