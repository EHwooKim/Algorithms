const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {

  const [total, ...priceArr] = input
  const sum = (a, b) => a + b

  console.log(solution(total, priceArr))

  function solution(total, priceArr)  {
    const knownTotal = priceArr.reduce(sum)
    return total - knownTotal
  }

  process.exit()
})

