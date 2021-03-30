const readline = (() => {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  let index = 0
  return () => input[index++].trim()
})()

const N = +readline()

solution(N)

function solution(N) {

  for (let i = 0; i < N; i++) {
    const num1 = readline()
    const num2 = readline()
    let count = 0

    for (let j = 0; j < num1.length; j++) {
      if (num1[j] !== num2[j]) {
        count += 1
      }
    }

    console.log(`Hamming distance is ${count}.`)
  }
}
