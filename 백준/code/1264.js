const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  solution(input)

  function solution(arr) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    arr.forEach(str => {
      if (str === '#') return
      let count = 0
      for (let s of str) {
        s = s.toLowerCase()
        if (vowel.findIndex(n => n === s) >= 0) {
          count += 1
        }
      }
      console.log(count)
    })
  }

  process.exit()
})