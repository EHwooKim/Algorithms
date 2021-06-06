const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {
    const N = +input[0]
    const count = {}
    let MAX = 0
    let result = []

    for (let i = 1; i <= N; i++) {
      const book = input[i]
      count[book] = count[book] ? count[book] + 1 : 1
    }

    for (const key in count) {
      if (count[key] > MAX) {
        MAX = count[key]
        result = [key]
      } else if (count[key] === MAX) {
        result.push(key)
      }
    }

    result.sort()

    return result[0]
  }

  process.exit()
})