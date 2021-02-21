const readline = (() => {
  let idx = 0
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  return () => input[idx++].trim()
})()

console.log(solution())

function solution() {
  const result = []
  for (let i = 1; i < 6; i++) {
    const name = readline()
    if (name.includes('FBI')) {
      result.push(i)
    }
  }

  if (result.length === 0) {
    return 'HE GOT AWAY!'
  } else {
    return result.join(' ')
  }
}