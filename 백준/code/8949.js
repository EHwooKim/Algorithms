const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(str) {
    const numbers = str.split(' ')
    
    const length = Math.max(...numbers.map(n => n.length))

    let result = ''
    const [num1, num2] = numbers.map(number => number.padStart(length, '0'))
    for (let i = 0; i < length; i++) {
      const sum = +num1[i] + +num2[i]
      result += sum+''
    }
    return result
  }

  process.exit()
})