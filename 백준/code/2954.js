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
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let result = ''

    let i = 0

    while (i < str.length) {
      const s = str[i]
      result += s
      i += 1

      if (vowel.includes(s)) {
        i += 2
      }
    }

    return result
  }

  process.exit()
})