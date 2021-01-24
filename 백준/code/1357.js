const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

const rev = str => +[...str].reverse().join('')
const sum = (a, b) => a + b

const result = rev(input.map(rev).reduce(sum) + '')

console.log(result)