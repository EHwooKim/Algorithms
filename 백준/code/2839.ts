import readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []
rl.on('line', function(line) {
  input.push(line)
}).on('close', function() {
  const N = parseInt(input[0])

  console.log(solution(N))

  function solution(N: number): number {
    let count = 0
    let currentNa = 0
    const [moc, na] = divmod(N, 5)
    count = moc
    currentNa = na

    while (true) {
      if (count < 0) return -1
      const [moc, na] = divmod(currentNa, 3)
      if (na === 0) {
        return count + moc
      }
      count -= 1
      currentNa += 5
    }
  }
  process.exit()
})

function divmod(num1: number, num2: number): number[] {
  const moc = Math.floor(num1 / num2)
  const na = num1 % num2
  return [moc, na]
}