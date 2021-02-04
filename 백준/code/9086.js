const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const getResult = str => `${str[0]}${str[str.length-1]}`

const T = +input[0].trim()

for (let i = 1; i <= T; i++) {
  const str = input[i].trim()
  console.log(getResult(str))
}
