const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(number) {
    const halfLength = number.length / 2
    const num1 = number.substr(0, halfLength)
    const num2 = number.substr(halfLength, halfLength)
    
    let result = 'READY'
    if (isLucky(num1, num2)) {
      result = 'LUCKY'
    }
    
    return result
  }

  function isLucky(num1, num2) {
    const total1 = [...num1].reduce((a, b) => a + (+b), 0)
    const total2 = [...num2].reduce((a, b) => a + (+b), 0)
    return total1 === total2
  }

  process.exit()
})

