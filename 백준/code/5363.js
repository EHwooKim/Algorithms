const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    return arr.map(yodaSay).join('\n')
  }

  function yodaSay(str) {
    const strArr = str.split(' ')
    return strArr.slice(2).concat(strArr.slice(0, 2)).join(' ')
  }

  process.exit()
})
