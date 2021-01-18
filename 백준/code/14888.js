const readline = (() => {
  let index = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[index++]
})()
const N = parseInt(readline().trim(), 10)
const numArr = readline().trim().split(' ').map(Number)
const countOfOperators = readline().trim().split(' ').map(Number)


solution(N, numArr, countOfOperators)

function solution(N, numArr, countOfOperators) {
  let MAX = -1000000000
  let MIN = 1000000000

  back(0, numArr[0])

  function back(depth, current) {
    if (depth === N - 1) {
      MIN = Math.min(MIN, current)
      MAX = Math.max(MAX, current)
      return
    }

    for (let i = 0; i < 4; i++) {
      if (countOfOperators[i]) {
        countOfOperators[i] -= 1
        back(depth + 1, calc(current, i, numArr[depth + 1]))
        countOfOperators[i] += 1
      }
    }
  }

  console.log(MAX)
  console.log(MIN)
}

function calc(num1, oper, num2) {
  switch (oper) {
    case 0:
      return num1 + num2
    case 1:
      return num1 - num2
    case 2:
      return num1 * num2
    case 3:
      if (num1 < 0) {
        const result = Math.floor(Math.abs(num1) / num2)
        return result === 0 ? 0 : result * -1
      }
      return Math.floor(num1 / num2)
    default:
      break
  }
}