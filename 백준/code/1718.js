const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [sentence, secret] = input

  console.log(solution(sentence, secret))

  function solution(sentence, secret) {
    const getSecret = getSecretKey(secret)
    
    const result = [...sentence].map(s => {
      const secretKey = getSecret()
      if (s === ' ') return s
      return getCharBefore(s, secretKey)
    })
    
    return result.join('')
  }

  function getCharBefore(char, count) {
    let charCode = char.charCodeAt() - count
    if (charCode <= 96) {
      charCode += 26
    }
    return String.fromCharCode(charCode)
  }

  function getSecretKey(word) {
    let idx = -1
    return () => {
      idx = (idx + 1) % word.length
      return word[idx].charCodeAt() - 96
    }
  }

  process.exit()
})
