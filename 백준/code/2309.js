const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {

  console.log(solution(input))

  
  function solution(arr) {
    
    const result = combination(arr)
    result.sort((a, b) => a - b)
    return result.join('\n')
  }

  function combination(arr) {
    const tmpArr = [];
    let result = [];

    (function combi(start) {
      if (tmpArr.length === 7) {
        const total = sum(tmpArr)
        if (total === 100) {
          result = [...tmpArr]
          return
        }
      }

      for (let i = start; i < arr.length; i++) {
        tmpArr.push(arr[i])
        combi(i + 1)
        tmpArr.pop()
        if (result.length) break
      }
    })(0)

    return result
  }

  function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
  }

  process.exit()
})