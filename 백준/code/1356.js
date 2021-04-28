const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line
}).on('close', () => {

  console.log(solution(input))

  function solution(numStr) {
    let result = 'NO'
    for (let i = 1; i < numStr.length; i++) {
      const [leftNum, rightNum] = [numStr.slice(0, i), numStr.slice(i)]
      if (multiple(leftNum) === multiple(rightNum)) {
        result = 'YES'
        break
      }
    }

    return result
  }

  function multiple(numStr) {
    numStr =  String(numStr)
    return [...numStr].reduce((a, b) => (+a) * (+b), 1)
  }

  process.exit()
})