const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []

rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(soltuion(arr))

  function soltuion(arr) {
    const result = arr.map(yesOrNo)
    return result.join('\n')
  }

  function yesOrNo(numStr) {
    const halfLength = numStr.length / 2
    const result = numStr[halfLength - 1] === numStr[halfLength]
      ? 'Do-it' 
      : 'Do-it-Not'
    return result
  }

  process.exit()
})