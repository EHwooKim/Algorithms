const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++]
})()

const N = +readline()

console.log(slution(N))

function slution(N) {
  const obj = {}

  for (let i = 0; i < N; i++) {
    const name = readline()[0]
    obj[name] = obj[name] ? obj[name] + 1 : 1
  }
  
  const filterdName = Object.keys(obj).filter(n => obj[n] >= 5)
  filterdName.sort()
  
  const result = filterdName.length ? filterdName.join('') : 'PREDAJA'
  
  return result
}