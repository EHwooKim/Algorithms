const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, seats] = input

  console.log(solution(seats))

  function solution(input) {
    let count = 1
    let isCouple = false

    for (const seat of input) {
      if (seat === 'S') {
        count += 1
      }
      if (seat === 'L') {
        if (isCouple) {
          count += 1
          isCouple = false
        } else {
          isCouple = true
        }
      }
    }
    return Math.min(count, seats.length)
  }
  
  process.exit()
})