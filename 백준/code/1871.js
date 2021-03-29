const readline = (() => {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')  
  let index = 0
  return () => input[index++].trim()
})()

const N = +readline()

solution(N)

function solution(N) {
  for (let i = 0; i < N; i++) {
    const carNumber = readline()
    const [str, num] = carNumber.split('-')
    const strNum = [...str]
      .map((n, i) => (n.charCodeAt() - 65) * (26**(2-i)))
      .reduce((a, b) => a + b)
    const isItNice = Math.abs(strNum - (+num))  
    const result = isItNice <= 100 ? 'nice' : 'not nice'
    console.log(result)
  }
}

