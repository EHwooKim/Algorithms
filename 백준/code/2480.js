const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input
rl.on('line', line => {
  input = line.split(' ').map(Number)
}).on('close', () => {

  console.log(solution(input))

  function solution(arr) {
    const [num1, num2, num3] = arr

    let count = 0
    let coin = 0

    if (num1 === num2) {
      count = 1
      coin = num1
    }
    if (num2 === num3 || num1 === num3) {
      count = count ? 2 : 1
      coin = coin ? coin : num3
    }    

    const rewards = [
      () => Math.max(...arr) * 100,
      () => 1000 + coin * 100,
      () => 10000 + coin * 1000,
    ]

    return rewards[count]()

  }

  process.exit()
})