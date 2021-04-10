const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {
  const sum = (a, b) => a + b

  console.log(solution(input))

  function solution(scores) {
    const wScore = scores.slice(0, 10)
    const kScore = scores.slice(10)

    wScore.sort((a, b) => b - a)
    kScore.sort((a, b) => b - a)

    const result = [
      wScore.slice(0, 3).reduce(sum),
      kScore.slice(0, 3).reduce(sum)
    ]

    return result.join(' ')
  }

  process.exit()
})