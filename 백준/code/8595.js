const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, str] = input

  console.log(solution(str))

  function solution(str) {
    let result = 0
    let savedNumber = ''

    for (const s of str) {
      if (Number.isInteger(+s)) {
        savedNumber += s
      } else {
        if (savedNumber && savedNumber.length < 7) {
          result += +savedNumber
          savedNumber = ''
        }
      }
    }

    if (savedNumber && savedNumber.length < 7) {
      result += +savedNumber
    }

    return result
  }

  process.exit()
})
