const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

const N = +readline()

solution(N)

function solution(N) {
  for (let i = 0; i < N; i++) {
    const [str1, str2] = readline().split(' ')
    let count = []

    for (j = 0; j < str1.length; j++) {
      const num1 = str1[j].charCodeAt()
      const num2 = str2[j].charCodeAt()

      let diff = num2 - num1

      if (diff < 0) {
        diff += 26
      }

      count.push(diff)
    }

    console.log(`Distances: ${count.join(' ')}`)
  }
}