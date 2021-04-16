const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = +line
}).on('close', () => {

  console.log(solution(input))

  function solution(number) {
    const inputNum = number

    let tmpNum = inputNum
    let count = 0

    while (true) {
      count += 1
      tmpNum = newSum(tmpNum)
      if (tmpNum === inputNum) {
        break
      }
    }

    return count
  }

  function newSum(number) {
    const num1 = number % 10
    const num2 = (Math.floor(number / 10) + number % 10) % 10
    return (num1 * 10) + num2
  }


  process.exit()
})