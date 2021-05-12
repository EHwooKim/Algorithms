const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {

  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    return arr.map(isPangram).join('\n')
  }

  function isPangram(str) {
    const check = new Array(26).fill(1)
    
    for (const s of str) {
      let code = s.charCodeAt()
      if (code >= 97 && code <= 122) {
        code -= 32
      }
      code -= 65
      if (code >= 0 && code <= 25) {
        check[code] = 0
      }
    }

    if (check.reduce((a, b) => a + b)) {
      let result = 'missing '
      check.forEach((c, i) => {
        if (c) {
          result += String.fromCharCode(i + 97)
        }
      })

      return result
    } 

    return 'pangram'
  }

  

  process.exit()
})
