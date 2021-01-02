import readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []
rl.on('line', function(line) {
  input.push(line)
}).on('close', function() {
  const [input1, input2] = input
  const [N, M]: number[] = input1.split(' ').map(n => +n)
  const arr: number[] = input2.split(' ').map(n => +n)

  console.log(solution(arr, M))
  
  function solution(arr: number[], length: number) {
    let sum: number = 0
    for(let i = 0; i < length; i++) {
      sum += arr[i]
    }

    let currentMax: number = sum

    let left: number = 0
    let right: number = length - 1
    while (right < arr.length - 1) {
      right++
      sum -= arr[left]
      sum += arr[right]
      left++
      currentMax = Math.max(currentMax, sum)
    }
    return currentMax
  }
  process.exit()
})