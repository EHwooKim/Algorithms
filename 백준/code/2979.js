const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []

rl.on('line', line => {
  input.push(line.split(' ').map(Number))
}).on('close', () => {

  const [money, ...times] = input

  console.log(solution(money, times))

  function solution(money, times) {
    const timeTable = Array(101).fill(0)
    times.forEach(([start, end]) => {
      for (let i = start; i < end; i++) {
        timeTable[i] += 1
      }
    })

    let total = 0
    for (const time of timeTable) {
      if (!time) continue
      total += money[time - 1] * time
    }

    return total
  }

  process.exit()
})
