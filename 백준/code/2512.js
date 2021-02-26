const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()
const sum = (a, b) => a + b

const N = +readline()

console.log(solution(N))

function solution(N) {
  const moneyArr = readline().split(' ').map(Number)
  const moneyLimit = +readline()

  let left = 0
  let right = Math.max(...moneyArr)
  let currentMaxTotal = 0
  let currentMaxMoney = 0

  if (moneyArr.reduce(sum) <= moneyLimit) {
    return right
  }

  while (true) {
    if (right - left < 2) break

    const middle = Math.floor((left + right) / 2)

    const [totalMoney, maxMoney] = calcMoney(moneyArr, middle)

    if (totalMoney > moneyLimit) {
      right = middle
      continue
    }

    if (totalMoney >= currentMaxTotal) {
      currentMaxTotal = totalMoney
      currentMaxMoney = maxMoney
      left = middle
    } else {
      right = middle
    }
  }    

  return currentMaxMoney
}

function calcMoney(arr, limit) {
  let totalMoney = 0
  let maxMoney = 0

  arr.forEach(money => {
    if (money > limit) {
      money = limit
    }
    totalMoney += money
    maxMoney = Math.max(maxMoney, money)
  })

  return [totalMoney, maxMoney]
}