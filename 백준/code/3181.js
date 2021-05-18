const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(str) {
    const uselessWords = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili']
    const strArr = str.split(' ')

    const result = strArr.map((word, index) => {
      const useless = uselessWords.indexOf(word)
      if (index &&  useless > -1) {
        return ''
      }
      return String.fromCharCode(word[0].charCodeAt() - 32)
    })

    return result.join('')
  }

  process.exit
})
