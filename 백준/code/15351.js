const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  const [N, ...arr] = input

  const charToNum = c => Math.max(c.charCodeAt() - 64, 0)
  const sum = (a, b) => a + b

  console.log(solution(arr))

  function solution(arr) {
    return arr.map(isGoodLife).join('\n')
  }
  
  function isGoodLife(str) {
    let result = [...str]
      .map(charToNum)
      .reduce(sum)

    if (result === 100) {
      result = 'PERFECT LIFE'
    }

    return result
  }


  process.exit()
})
