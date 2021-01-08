const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(''))
}).on('close', () => {
  const isOdd = n => n % 2 !== 0
  const isEven = n => n % 2 === 0

  console.log(solution(input))

  function solution(arr) {
    let count = 0

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((isEven(i) && isEven(j)) || (isOdd(i) && isOdd(j))) {
          if (arr[i][j] === 'F') {
            count += 1
          }
        }
      }
    }
    return count
  }

  process.exit()
})
