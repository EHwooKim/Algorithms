const fs = require('fs')
const [input1, input2, input3] = fs.readFileSync('/dev/stdin').toString().split('\n')

solution(+input1, +input2, +input3)

function solution(num1, num2, num3) {
  const count = new Array(10).fill(0)
  const numStr = (num1 * num2 * num3) + ''
  for (const n of numStr) {
    count[+n] += 1
  }
  for (const c of count) {
    console.log(c)
  }
}