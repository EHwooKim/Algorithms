const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = 0
rl.on('line', line => {
  input = +line
}).on('close', () => {

  console.log(solution(input))

  function decompositionSum(number) {
    let result = number
    for (const n of String(number)) {
      result += +n
    }
    return result
  }
  
  function solution(number) {
    let result = 0
    
    for (let i = 1; i <= number; i++) {
      const deSum = decompositionSum(i)
      if (deSum === number) {
        result = i
        break
      }
    }
  
    return result
  }

  process.exit()
})

