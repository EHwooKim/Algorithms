const input = require('fs').readFileSync('/dev/stdin').toString()
  .split('\n').map(n => n.split(' ').map(Number))
const add = (a, b) => a + b


console.log(...solution(input))

function solution(arr) {
  const totalArr = arr.map(n => n.reduce(add))
  let result = [0, 0]

  totalArr.forEach((score, index) => {
    if (score > result[1]) {
      result = [index + 1, score]
    }
  }) 
  
  return result
}