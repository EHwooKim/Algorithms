const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(' '))
}).on('close', () => {
  const [N, ...arr] = input

  solution(arr)

  function solution(arr) {
    arr.forEach(str => console.log(repeatWord(...str)))
  }

  function repeatWord(num, str) {
    if (!str) {
      return console.log('need str')
    }

    const repeatWords = [...str].map(s => s.repeat(+num))
    return repeatWords.join('')
  }

  process.exit()
})
