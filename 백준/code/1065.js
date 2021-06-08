const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = 0
rl.on('line', line => {
  input = +line
}).on('close', () => {

  console.log(solution(input))

  function solution(number) {
    let count = 0
    for (let i = 1; i <= number; i++) {
      count += hanSu(i)
    }
    return count
  }

  function hanSu(number) {
    const numStr = String(number)
    let result = true
  
    if (numStr.length === 2) {
      return result
    }
    const interval = (+numStr[0]) - (+numStr[1])
  
    for (let i = 1; i < numStr.length - 1; i++) {
      const tmp = (+numStr[i]) - (+numStr[i + 1])
      if (tmp !== interval) {
        result = false
        break
      }
    }
  
    return result
  }

  process.exit()
})
