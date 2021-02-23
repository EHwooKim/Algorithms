const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n=>n.trim())

console.log(solution(input))

function solution(arr) {
  const colorArr = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  let result = ''

  for (let i = 0; i < 3; i++) {
    const color = arr[i]
    const value = colorArr.findIndex(n => n === color)
    if (i < 2) {
      result += value
    } else {
      result = (+result) * (10 ** value)
    }
  }

  return result
}


