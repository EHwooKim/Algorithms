const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
const input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  const [N, ...arr] = input

  console.log(solution(arr))

  function solution(arr) {
    return arr.map(n => groupCheck(n)).reduce((a, b) => a + b, 0)
  }
  
  function groupCheck(str) {
    let check = [str[0]]
    let current = str[0]
    
    for (const s of str) {
      if (s === current) continue
      if (s !== current) {
        if (check.includes(s)) return false
        check.push(s)
        current = s
      }
    }
    return true
  }

  process.exit()
})