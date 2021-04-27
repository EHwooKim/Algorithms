const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  console.log(solution(input))

  function solution(strArr) {
    const count = {}

    strArr.forEach((str, index) => {
      for (const s of str) {
        if (index === 0) {
          count[s] = count[s] ? count[s] + 1 : 1
        } else {
          count[s] = count[s] ? count[s] - 1 : -1
        }
      }
    })

    const result = Object.values(count).reduce((a, b) => Math.abs(a) + Math.abs(b))

    return result
  }

  process.exit()
})