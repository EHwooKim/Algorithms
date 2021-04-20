const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(+line)
}).on('close', () => {

  console.log(solution(input))

  function solution(arr) {
    const burger = arr.slice(0, 3)
    const drink = arr.slice(3)
    
    const result = Math.min(...burger) + Math.min(...drink) - 50

    return result
  }

  process.exit()
})