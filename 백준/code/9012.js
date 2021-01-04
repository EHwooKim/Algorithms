const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', function(line) {
  input.push(line)
}).on('close', function() {
  const [N, ...arr] = input

  solution(arr)

  function solution(arr) {
    for (const ps of arr) {
      let count = 0
      for (const s of ps) {
        if (s === '(') {
          count += 1
        } else {
          count -= 1
          if (count < 0) break
        }
      }
      if (count) {
        console.log('NO')
      } else {
        console.log('YES')
      }
    }
  }

  process.exit()
})
