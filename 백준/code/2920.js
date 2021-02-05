const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').join('')

const ascending = '12345678'
const descending = '87654321'

let result = 'mixed'

if (input === ascending) result = 'ascending'
if (input === descending) result = 'descending'

console.log(result)