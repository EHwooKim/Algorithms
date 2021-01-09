const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
let input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  const [N, ...arr] = input

  console.log(solution(+N, arr))

  function solution(N, arr) {
    let result = ''

    for (let i = 0; i < arr[0].length; i++) {
      const s = arr[0][i]
      let tmp = true
      for (let j = 1; j < N; j++) {
        if (s !== arr[j][i]) {
          result += '?'
          tmp = false
          break
        }
      }
      if (tmp) result += s
    }
    return result
  }

  process.exit()
})