const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    let result = []

    arr.forEach(s => {
      const revered = strReverse(s)
      if (arr.includes(revered)) {
        result = [s.length, s[Math.floor(s.length / 2)]]
        return
      }
    })

    return result.join(' ')
  }

  function strReverse(str) {
    return [...str].reverse().join('')
  }

  process.exit()
})