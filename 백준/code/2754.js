const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = ''
rl.on('line', line => {
  input = line.trim()
}).on('close', () => {

  console.log(solution(input))

  function solution(score) {
    const scores = {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
      F: 0
    }
    const [grade, alpha] = score.split('')
    
    let result = scores[grade]

    if (alpha === '+') {
      result += 0.3
    } else if (alpha === '-') {
      result -= 0.3
    }

    return new Number(result).toFixed(1)
  }

  process.exit()
})

