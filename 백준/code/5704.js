const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.trim())
}).on('close', () => {

  solution(input)

  function solution(arr) {
    for (const a of arr) {
      if (a === '*') continue
      let result = 'N'

      if (isPangram(a)) {
        result = 'Y'
      }
      console.log(result)
    }
  }

  function isPangram(sentence) {
    const alpha = new Array(26).fill(1)
    for (const w of sentence) {
      if (w === ' ') continue
      const index = w.charCodeAt() - 97
      alpha[index] = 0
    }
    return !alpha.reduce((a, b) => a + b)
  }
})