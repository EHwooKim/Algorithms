const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = 0
rl.on('line', line => {
  input = +line
}).on('close', () => {

  console.log(solution(input))

  function solution(input) {
    let count = [1, 0]

    for (let i = 0; i < input; i++) {
      count = BABBA(...count)
    }

    return count.join(' ')
  }

  function BABBA(countA, countB) {
    return [countB, countA + countB]
  }

  process.exit()
})